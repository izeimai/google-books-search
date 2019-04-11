import React, { Component } from 'react';
import { Container, Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import RemoveBookBtn from "../../components/RemoveBookBtn";
import axios from "axios";

class Saved extends Component {
  state = {
    savedBooks: [],
    initialized: true
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books")
      .then(res => {
        this.setState({ savedBooks: res.data })
      })
      .catch((err => console.log(err)))
  }

  deleteFromDB = id => {
    axios.delete(`/api/books/${id}`)
      .then(
        this.getBooks()
      )
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              {this.state.savedBooks.length > 0 ?
                <BookList>
                  {this.state.savedBooks.map(book => {
                    console.log(book)
                    return (
                      <div>
                        <BookListItem
                          key={book._id}
                          authors={book.authors}
                          title={book.title}
                          synopsis={book.synopsis}
                          link={book.link}
                          image={book.image}
                        />
                        <RemoveBookBtn onClick={() => this.deleteFromDB(book._id)} />
                      </div>
                    )
                  })}
                </BookList>

                :
                <div>
                  <h2>No Saved Books</h2>
                </div>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Saved;
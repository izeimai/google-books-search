import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import { DeleteBtn } from "../components/DeleteBtn";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    authors: [],
    description: "",
    link: "",
    image: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };
  

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
          <h2>Saved Books</h2>
            {this.state.books.length ? (
              <BookList>
                {this.state.books.map(book => (
                  <BookListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </BookListItem>
                ))}
              </BookList>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;

import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";


class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;
    axios.get(url)
      .then(res => { this.displayRes(res.data) })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
            <div className="input-group">
              <input id="bookQuery" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
              <div className="input-group-append">
              <button type="button" className="btn btn-primary ml-1" onClick={this.searchBooks}>Search for Book</button>
              </div>
            </div>
          </Col>
          <Col size="md-2"></Col>
        </Row>

        <br />

        {
          (this.state.books.length) ?
            <BookList>
              {this.state.books.map(book => {
                return (
                  <BookListItem
                    key={book.id}
                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No author(s) available"]}
                    title={book.volumeInfo.title}
                    synopsis={book.volumeInfo.description ?
                      book.volumeInfo.description : "No description available"}
                    link={book.volumeInfo.infoLink}
                    image={book.volumeInfo.imageLinks.thumbnail ?
                      book.volumeInfo.imageLinks.thumbnail : "No Book cover image available"}
                  />
                )
              })}
            </BookList>
            :
            <Row>
              <Col size="md-12">
                <br />
                <div>
                  <h2>No Books To Display</h2>
                </div>
              </Col>
            </Row>
        }
      </Container>
    )
  };
}

  export default Search;


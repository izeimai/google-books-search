import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import { BookList, BookListItem } from "../components/BookList";
import { SaveBtn } from "../components/SaveBtn";

class Search extends Component {
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
        this.setState({ books: res.data, title: "", authors: "", description: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Input value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Book Title (required)"
            />
            <FormBtn disabled={!(this.state.title)} onClick={this.handleFormSubmit}>
              Search for Book
              </FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <BookList>
                {this.state.books.map(book => (
                  <BookListItem key={book._id}
                    authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
                    title={book.volumeInfo.title}
                    synopsis={book.volumeInfo.description ?
                      book.volumeInfo.description : "No Description Available"}
                    link={book.selfLink}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail ?
                      book.volumeInfo.imageLinks.thumbnail : "#"}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <SaveBtn onClick={() => this.saveBook(book._id)} />
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

export default Search;
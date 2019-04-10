import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
// import { SaveBtn } from "../components/SaveBtn";

class Search extends Component {
  state = {
    results: [],
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
        author: this.state.author,
        synopsis: this.state.synopsis
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
            {this.state.results.length ? (
              <p>Populating</p>
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
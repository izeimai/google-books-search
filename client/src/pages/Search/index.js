import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "../../components/Grid";
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
      <Row>
        <Col size="md-12">
          <div>
            <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
            <button type="submit" onClick={this.searchBooks} >
              Search for Books
          </button>


            {(this.state.books.length) ?
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
                  <div>
                    <h2>No Books To Display</h2>
                  </div>
                </Col>
              </Row>
            }

          </div>
        </Col>
      </Row>
    );
  }
}

export default Search;
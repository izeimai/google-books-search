import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import AddBookBtn from "../AddBookBtn";
import RemoveBookBtn from "../RemoveBookBtn";
import BookToast from "../BookToast";
import "./style.css";

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export class BookListItem extends React.Component {
  state = {
    showToast: false
  }

  makeToast = () => {
    return (
      <BookToast
        title={this.props.title}
        buttonLabel={"x"}
      />
    )
  }

  toggleToast = () => {
    this.setState({ showToast: true })
  }

  render() {
    return (
      <Container>
        {this.state.showToast && this.makeToast()}
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={this.props.image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{this.props.title}<span><h5>{this.props.authors.join(", ")}</h5></span></h3>
            <p>
              {this.props.synopsis}
            </p>
            <a target="_blank" href={this.props.link} rel="noopener noreferrer">
              Link to Book!
              </a>
            {(this.props._id) ?
              <RemoveBookBtn
                id={this.props._id}
                authors={this.props.authors}
                title={this.props.title}
                synopsis={this.props.synopsis}
                link={this.props.link}
                image={this.props.image}
                delete={this.props.delete}
              />
              :
              <AddBookBtn
                authors={this.props.authors}
                title={this.props.title}
                synopsis={this.props.synopsis}
                link={this.props.link}
                image={this.props.image}
                toast={() => this.toggleToast()}
              />
            }

          </Col>
        </Row>
      </Container>
    );
  }
}
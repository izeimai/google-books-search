import React from "react";
import Button from "../Button";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <Button onClick={() => this.props.delete(this.props.id)}>
      Delete Book
    </Button>
  );
}


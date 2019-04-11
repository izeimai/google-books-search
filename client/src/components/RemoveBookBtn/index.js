import React from "react";
import Button from "../Button";


function RemoveBookBtn(props) {
    return (
      <Button className="delete-btn" {...props} role="button" tabIndex="0">
        Delete Book
      </Button>
    );
  }

  export default RemoveBookBtn;
import React from "react";
import Button from "../Button";
import axios from "axios";
import {Toast, ToastBody, ToastHeader} from "reactstrap";

class AddBookBtn extends React.Component{
    state = {
        showToast: false
    }

    makeToast = (title) => {
      console.log("toasted..")
      return(
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            You added {title} to your bookshelf!
          </ToastBody>
        </Toast>
      </div>
      )
    }

    postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          image: book.image,
          link: book.link
        }
    
        axios.post("/api/books", dbBook)
        .then(console.log("added"))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Button type="primary" onClick={() => 
            {this.postToDB(this.props)
              this.props.toast()
            }}>
            Save Book
        </Button>
        </div>
        );
    }
  }

  export default AddBookBtn;
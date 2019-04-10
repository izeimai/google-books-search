import React from "react";
import Button from "../Button";


class RemoveBookBtn extends React.Component {

    render(){
        return (
            <Button onClick={()=>this.props.delete(this.props.id)}>
                Delete Book   
            </Button>
        )
    }
    
  }

  export default RemoveBookBtn;
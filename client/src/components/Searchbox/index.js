import React from "react";
import "./style.css";
import Button from "./components/Button";

function Searchbox() {
    return (
        <div>
            <p>Put the search form here</p>
            <Button onClick={this.handleFormSubmit} type="success" className="input-lg">Search</Button>
        </div>
    );
}

export default Searchbox;
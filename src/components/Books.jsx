import React from "react";
import "./Book.css";

const Books = (props) => {
  return (
    <div className="Book">
      <img className="BookImg" alt="book" src={props.image} />
      <div className="BookDetails">
        <h2>{props.title} </h2>
        <p className="book-author">
          by the best selling author{props.publisher}
        </p>
        <p className="book-price">${props.price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Books;

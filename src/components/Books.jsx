import React from "react";
import "./Book.css";

const Books = (props) => {
  const { image, title, publisher, price } = props;

  return (
    <div className="Book">
      <img className="BookImg" alt="book" src={image} />
      <div className="BookDetails">
        <h2>{title} </h2>
        <p className="book-author">by the best selling author{publisher}</p>
        <p className="book-price">${price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Books;

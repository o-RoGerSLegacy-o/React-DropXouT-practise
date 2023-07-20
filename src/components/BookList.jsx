import React from "react";
import Books from "./Books";

const BookList = () => {
  const sampleBook = {
    image: "https://m.media-amazon.com/images/I/61d8kWBnb+L._AC_UY218_.jpg",
    title: "the Birthday Girl",
    publisher: "Murakami",
    price: 399,
  };

  const sampleBook2 = {
    image:
      "https://m.media-amazon.com/images/I/41OggnykJJL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "the Birthday Girl",
    publisher: "Murakami",
    price: 399,
  };

  return (
    <div>
      <Books
        title={sampleBook.title}
        image={sampleBook.image}
        publisher={sampleBook.publisher}
        price={sampleBook.price}
      />
      <Books
        title={sampleBook2.title}
        image={sampleBook2.image}
        publisher={sampleBook2.publisher}
        price={sampleBook2.price}
      />
    </div>
  );
};

export default BookList;

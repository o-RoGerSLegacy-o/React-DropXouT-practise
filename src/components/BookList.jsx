import React from "react";
import Books from "./Books";
import AllBooks from "./AllBooks.json";

const BookList = () => {
  return (
    <div>
      {AllBooks.map((ele) => {
        return (
          <Books
            title={ele.title}
            image={ele.image}
            publisher={ele.publisher}
            price={ele.price}
          />
        );
      })}
    </div>
  );
};

export default BookList;

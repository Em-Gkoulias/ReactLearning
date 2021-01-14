import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import Book from './Book';
import { data } from "./books.js";

function BookList() {
  return (
    <section className="bookList">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const books = [
  {
    id: 1,
    image:
      "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg",
    title: "The Cat's revenge",
    author: "Amelia Cat",
  },
  {
    id: 2,
    image: "https://avatarfiles.alphacoders.com/124/124420.jpg",
    title: "KittyKat",
    author: "Little Kitty",
  },
];

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

// destructuring props
const Book = ({ image, title, author }) => {
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

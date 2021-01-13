import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const firstBook = {
  image: "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg",
  title: "The Cat's revenge",
  author: "Amelia Cat"
};

const secondBook = {
  image: "https://avatarfiles.alphacoders.com/124/124420.jpg",
  title: "KittyKat",
  author: "Little Kitty",
};

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section className="bookList">
      <Book image={ firstBook.image } title={ firstBook.title } author={ firstBook.author } />
      <Book image={ secondBook.image } title={secondBook.title} author={ secondBook.author } />
    </section>
  );
}

const Book = (props) => {

  // destructuring
  const {image, title, author} = props;

  return (
    <article className="book">
      <img src={ image } alt="" />
      <h1>{ title }</h1>
      <h4>{ author }</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg"
    alt=""
  />
);

const Title = () => <h1>The Cat's revenge</h1>;

const Author = () => <h4>Amelia Cat</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));

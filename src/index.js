import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section>
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
    <article>
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

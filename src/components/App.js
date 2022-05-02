import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <Article />
      <ArticleList posts={blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;

/*### Header

Make a `Header` component as a child of `App`. It should return:

- a `<header>` element with the following elements inside:
  - an `<h1>` with the _name_ of the blog, passed as a prop

### About

Make an `About` component as a child of `App`. It should return:

- an `<aside>` element with the following elements inside:
  - an `<img>` element, with the `src` set to an _image_ passed as a prop
  - the `<img>` element should use this placeholder image as a _default value_
    for the prop if no prop is passed in: "https://via.placeholder.com/215"
  - the image should also be accessible! Give it an `alt` attribute of "blog logo"
  - a `<p>` element, with the _about_ text for the blog passed in as a prop

### ArticleList

Make an `ArticleList` component as a child of `App`. It should return:

- a `<main>` element with the following components inside:
  - an array of `Article` components (one component for each _post_ passed down
    as a prop to `ArticleList`)
  - make sure to assign a unique `key` prop to each `Article`

### Article

Make an `Article` component as a child of `ArticleList`. It should return:

- an `<article>` element, with the following elements inside:
  - an `<h3>` element displaying the _title_ of the article, passed as a prop
  - a `<small>` element displaying the _date_ of the article, passed as a prop
    - a _default value_ of "January 1, 1970" should be used if no date is passed as a prop
  - a `<p>` element displaying the _preview_ of the article, passed as a prop*/
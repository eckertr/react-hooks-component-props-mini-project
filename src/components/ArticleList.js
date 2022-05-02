import React from "react"
import Article from "./Article"

function ArticleList({ posts }) {
    const articles = posts.map((post) => {
        return (<main
        title={post.title}
        preview={post.preview}
        date={post.date}
        />)
    })
    console.log(posts)
   
} 
    
   


export default ArticleList
/*Make an `ArticleList` component as a child of `App`. It should return:

- a `<main>` element with the following components inside:
  - an array of `Article` components (one component for each _post_ passed down
    as a prop to `ArticleList`)
  - make sure to assign a unique `key` prop to each `Article*/
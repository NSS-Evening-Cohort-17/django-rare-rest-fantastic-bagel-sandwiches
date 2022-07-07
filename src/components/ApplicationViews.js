import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./post/PostList"

export const ApplicationViews = () => {
  return (
    <>
    <Route exact path="/posts">
      <PostList />
    </Route>
  </>
  )
  
  

}
  // (
  //   <h1 >Welcome to Rare Publishing</h1>
  // )
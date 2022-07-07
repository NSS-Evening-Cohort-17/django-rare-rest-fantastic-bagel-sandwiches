import React from "react"
import { Route } from "react-router-dom"
import { PostForm } from "./post/PostForm"
import { PostList } from "./post/PostList"

export const ApplicationViews = () => {
  return (
    <>
    <Route exact path="/posts">
      <PostList />
    </Route>
    <Route exact path="/posts/new">
      <PostForm />
    </Route>
  </>
  )
  
  

}
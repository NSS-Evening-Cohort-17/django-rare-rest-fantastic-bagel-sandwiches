import React from "react"
import { Route } from "react-router-dom"
import { PostDetail } from "./post/PostDetail"
import { PostForm } from "./post/PostForm"
import { PostList } from "./post/PostList"
import { UserPostList } from "./post/UserPostList"
import { PostEditForm } from "./post/PostEditForm"

export const ApplicationViews = () => {
  return (
    <>
    <Route exact path="/posts">
      <PostList />
    </Route>
    <Route exact path="/posts/new">
      <PostForm />
    </Route>
    <Route exact path="/posts/:postId/edit">
      <PostEditForm />
    </Route>
    <Route exact path="/posts/my_posts">
      <UserPostList />
    </Route>
    <Route exact path="/posts/:postId(\d+)">
      <PostDetail />
    </Route>
    <Route exact path="/my_posts/:postId(\d+)">
      <PostDetail />
    </Route>
  </>
  )
  
  

}
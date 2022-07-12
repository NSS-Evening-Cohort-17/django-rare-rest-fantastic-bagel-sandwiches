import React from "react"
import { Route } from "react-router-dom"
import { PostDetail } from "./post/PostDetail"
import { PostForm } from "./post/PostForm"
import { PostList } from "./post/PostList"
import { UserPostList } from "./post/UserPostList"
import { CategoryList } from "./category/CategoryList"
import { PostDetailComment } from "./post/PostDetailComment"
import { CommentForm } from "./comment/CommentForm"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/posts">
        <PostList />
      </Route>
      <Route exact path="/posts/new">
        <PostForm />
      </Route>
      <Route exact path="/posts/my_posts">
        <UserPostList />
      </Route>
      <Route exact path="/posts/:postId(\d+)">
        <PostDetail />
      </Route>
      <Route exact path="/posts/:postId(\d+)/comments">
        <PostDetailComment />
      </Route>
      <Route exact path="/my_posts/:postId(\d+)">
        <PostDetail />
      </Route>
      <Route exact path="/categories">
        <CategoryList />
      </Route>
      <Route exact path="/my_posts/:postId(\d+)/comments">
        <PostDetailComment />
      </Route>
      <Route exact path="/posts/comments/new/:postId(\d+)">
        <CommentForm />
      </Route>
    </>
  )
}
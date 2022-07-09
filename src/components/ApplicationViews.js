import React from "react"
import { Route } from "react-router-dom"
import { PostDetail } from "./post/PostDetail"
import { PostForm } from "./post/PostForm"
import { PostList } from "./post/PostList"
import { UserPostList } from "./post/UserPostList"
import { CategoryList } from "./category/CategoryList"
import { PostDetailComment } from "./post/PostDetailComment"
import { CommentForm } from "./post/CommentForm"

export const ApplicationViews = () => {
  return (
    <>
<<<<<<< HEAD
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
    <Route exact path="/my_posts/:postId(\d+)/comments">
      <PostDetailComment />
    </Route>
    <Route exact path="/comments/new">
      <CommentForm />
    </Route>
  </>
=======
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
    </>
>>>>>>> 823ad5465e7b13a1e773cc31cc933d8c6fc561a6
  )
}
import React from "react";
import "./CommentCard.css"

export const CommentCard = ({ comment }) => {

    return (
        <>
        <section className="comment">
        <p>{comment.content}</p>
        <p className="comment__details">Posted by {comment.post.user.user.username} on {comment.created_on}</p>
        </section>
        

        </>
    )
}
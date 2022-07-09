import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostComments } from "./PostManager"
import { CommentCard } from "./CommentCard";

export const PostDetailComment = () => {

    const [comments, setComments] = useState([]);
    const {postId} = useParams();
    
    // const loadComments = () => {
    //     getPostComments(postId)
    //         .then(data => 
    //             (setComments(data)))
    // }

    // useEffect(() => {
    //     loadComments()
    // }, [])

    useEffect(() => {
        getPostComments(postId)
            .then(data => 
                (setComments(data)))
    }, [])

    return (
        <>
        <article className="commentlist">
        <h2>Comments</h2>
        {comments.map(comment => 
            <CommentCard
            key={comment.id}
            comment={comment}
            />
        )}
        </article>
        
        </>
    )
}
 
import react, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "./PostManager";
import "./PostDetail.css"

export const PostDetail = ( ) => {

    const {postId} = useParams();
    const [post, setPost] = useState([]);


    // const loadPost = () => {
    //     getPostById(postId).then(data => setPost({
    //         id: post.id,
    //         title: post.title,
    //         author: post.user.user.username,
    //         category: post.category.label,
    //         publicationDate: post.publication_date,
    //         content: post.content,
    //         imageURL: image_url
    //     }))
    // }

    const loadPost = () => {
        getPostById(postId)
            .then(data => {
                setPost(data)
            })
    }

    useEffect(() => {
        loadPost()
    }, [])
        
    return (
        <>
        <article className="post__detail__group">
            <img src={post.image_url} alt="{post.title}" /> 
            <h2>{post.title}</h2>
            <div className="post__detail__info">
                <p>Posted by {post.user?.user.username} in <span className="post__detail__category">{post.category?.label}</span> on {post.publication_date}</p>
            </div>
            <p>{post.content}</p>
        </article>

        <Link to={`${postId}/comments`}><button className="post__detail__button">Comments</button></Link> 
        </>
    )
}
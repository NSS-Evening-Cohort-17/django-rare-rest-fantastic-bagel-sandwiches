import react from "react";
import { Link } from "react-router-dom";
import "./PostCard.css"
import "./../Rare.css"

export const PostCard = ({ post }) => {
    return (
        <>
        <section className="postcard">
            <div className="postcard__header">
                <h3 className="postcard__header__title">{post.title}</h3> <span className="postcard__header__date">Posted {post.publication_date}</span>
            </div>
            <div className="postcard__photo">
                <img src={post.image_url} alt={post.title}/>  
            </div>
            <div className="postcard__footer">
                <p className="postcard__footer__auth">Posted by {post.user.user.username} in <span className="postcard__footer__cat">{post.category.label}</span> </p>
            </div>
        
        </section>
        
        </>
    )
}
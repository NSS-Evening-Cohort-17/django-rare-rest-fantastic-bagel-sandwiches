import react, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { DeletePostModal } from "./DeletePostModal";
import "./PostCard.css"
import "./UserPostCard.css"
import "./../Rare.css"

export const UserPostCard = ({ post, delPost }) => {

    const [deletePopup, setDeletePopup] = useState(false)
    const deleteDialog = useRef()

    return (
        <>
        <dialog ref={deleteDialog}>
                <div className="overlay">
                    <div className="overlay__inner">
                        <h2>Are you sure you want to delete this post?</h2>
                        <div className="overlayBtns">
                            <button 
                            className="overlayBtn" 
                            onClick={e => deleteDialog.current.close()}>
                            Cancel
                        </button>
                        <button 
                            className="overlayBtn" 
                            onClick={() => {
                                delPost(post.id)
                                deleteDialog.current.close()}}>
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
        </dialog>







        <section className="postcard">
            <div className="postcard__header">
                <h3 className="postcard__header__title">{post.title}</h3> <span className="postcard__header__date">Posted {post.publication_date}</span>
            </div>
            <div className="postcard__photo">
                <img src={post.image_url} alt={post.title}/>  
            </div>
            <div className="postcard__footer__group">
                <div className="postcard__footer">
                    <p className="postcard__footer__auth">Posted by {post.user.user.username} in <span className="postcard__footer__cat">{post.category.label}</span> </p>
                </div>
                <div>
                    <button 
                        className="cardBtn" 
                        id="cardBbt__edit">
                            ✒️
                    </button>
                    <button 
                        // onClick={() => {
                        //     console.log('click post', post)
                        //     delPost(post.id)
                        // }}
                        onClick={() => {
                            deleteDialog.current.showModal()
                        }}
                        className="cardBtn" 
                        id="cardBbt__delete">
                    🗑️
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}
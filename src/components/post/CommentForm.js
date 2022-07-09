import React, { useState } from "react";

export const CommentForm = () => {

    const [comment, setComment] = useState({
        content: "",
        created_on: ""
    })
    return (
        <>
        <form className="postForm">
        <h2>Add a comment</h2>
        <fieldset>
            <div className="postForm__group">
                <label htmlFor="content">Comment</label>
                <input
                    type="textarea"
                    name="content"
                    className="postForm__input"
                    required
                    autoFocus
                    // value={}
                    // onChange={}
                />
            </div>
        </fieldset>    
        </form>
        
        </>
    )
}
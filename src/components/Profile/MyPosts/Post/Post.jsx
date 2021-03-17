import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={css.post}>
            <div className="message">Message: {props.message}</div>
            <div className="likes">Likes: {props.likesCount}</div>
        </div>
    )
}

export default Post;
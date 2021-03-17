import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";

const MyPosts = (props) => {

let postsElement = props.posts.map(post =>
     <Post message={post.message} likesCount={post.likesCount}/> );

let newPostElement = React.createRef();

let onAddPost = () => {
    props.addPost();
}

let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
}

    return (
        <div>
            <div>
                <textarea onChange={ onPostChange } ref={newPostElement} 
                          value={props.newPostText} cols="30" rows="2"></textarea>
            </div>
            <div>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={css.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
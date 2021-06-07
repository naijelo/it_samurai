import React from "react";
import Post from "./Post/Post";
import css from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

const MyPosts = (props) => {

let postsElement = props.posts.map(post =>
     <Post message={post.message} likesCount={post.likesCount} key={post.id}/> );

let newPostElement = React.createRef();

let onAddPost = (values) => {
    props.addPost(values.newPostText);
}

return (
    <div>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={css.posts}>
            {postsElement}
        </div>
    </div>
)
}



export default MyPosts;
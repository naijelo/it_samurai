import React from "react";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div className={css.profile}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts} 
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;
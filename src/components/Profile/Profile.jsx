import React from "react";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={css.profile}>
            <ProfileInfo profile={props.profile} status={props.status}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
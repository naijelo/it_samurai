import React from "react";
import css from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={css.profile}>
            <ProfileInfo profile={props.profile} 
                         savePhoto={props.savePhoto} 
                         isOwner={props.isOwner} 
                         status={props.status} 
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
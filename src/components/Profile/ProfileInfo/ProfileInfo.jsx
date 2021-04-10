import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import css from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="no userpic, sorry %("/>
                <div>{props.profile.aboutMe ? props.profile.aboutMe : "status is empty"}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;
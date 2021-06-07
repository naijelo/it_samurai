import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import css from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
            </div>
            <div>
                <img src={props.profile.photos.large} alt="no userpic, sorry"/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                {/* <div>{props.profile.aboutMe ? props.profile.aboutMe : "AboutMe field is empty"}</div> */}
            </div>
        </div>
    )
}

export default ProfileInfo;
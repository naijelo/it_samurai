import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import css from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/userpic.png";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={profile.photos.small || userPhoto}/>
                <ProfileStatus status={status} updateStatus={updateStatus}/>

            </div>
        </div>
    )
}

export default ProfileInfo;
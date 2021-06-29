import React from "react";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";
import css from "./Users.module.css";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
    return (
    <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} 
                totalItemsCount={totalUsersCount} pageSize={pageSize} />
                
        <div  className={css.usersCards}>
            {
            users.map(u => <User user={u}
                                 followingInProgress ={props.followingInProgress}
                                 key={u.id}
                                 unfollow={props.unfollow}
                                 follow={props.follow} />
                    )
           }
        </div>
    </div>
    )}

export default Users;
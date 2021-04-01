import React from "react";
import userPhoto from "../../assets/userpic.png";
import css from "./Users.module.css";


let Users = (props) => {


    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 20;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={css.users}>
        <div>
            {pages.map(el => {
                return <span className={`${css.page} ${props.currentPage === el && css.selectedPage}`}
                    onClick={(e) => { props.onPageChanged(el) }}>{el}</span>
            })}
        </div>
        <div className={css.usersCards}>
        {props.users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>"u.location.country"</div>
                <div>"u.location.city"</div>

            </div>)
        }
        </div>
    </div>
}

export default Users;
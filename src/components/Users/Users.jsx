import React from "react";
import css from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/userpic.png";


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPostChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pagesCount = 20;
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div className={css.users}>
            <div>
                {pages.map(el => {
                    return <span className={this.props.currentPage === el && css.selectedPage}
                        onClick={(e) => { this.onPostChanged(el) }}>{el}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}

                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>"u.location.country"</div>
                    <div>"u.location.city"</div>

                </div>)
            }
        </div>
    }
}

export default Users;
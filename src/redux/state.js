import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
        _state: {
            profilePage: {
                posts: [
                    {id: 1, message: "postmessage1", likesCount: 12},
                    {id: 2, message: "postmessage2", likesCount: 15},
                    {id: 3, message: "postmessage3", likesCount: 0},
                    {id: 4, message: "postmessage4", likesCount: 2},
                    {id: 5, message: "postmessage5", likesCount: 100},
                    {id: 6, message: "postmessage6", likesCount: 98},
                ],
                newPostText: ""
            },
            dialogsPage: {
                dialogs: [
                    {id: 1, name: "Alex"},
                    {id: 2, name: "Bloom"},
                    {id: 3, name: "Centra"},
                    {id: 4, name: "Dilly"},
                    {id: 5, name: "Elena"},
                    {id: 6, name: "Franklin"}
                ],
                messages: [
                    {id: 1, message: "message1"},
                    {id: 2, message: "message2"},
                    {id: 3, message: "message3"},
                    {id: 4, message: "message4"},
                    {id: 5, message: "message5"},
                    {id: 6, message: "message6"}
                ],
                newMessageBody: ""
            }
        },

    _callSubscriber() {
        console.log("State is changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);    

            this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
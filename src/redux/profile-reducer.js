const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
                    posts: [
                            {id: 1, message: "postmessage1", likesCount: 12},
                            {id: 2, message: "postmessage2", likesCount: 15},
                            {id: 3, message: "postmessage3", likesCount: 0},
                            {id: 4, message: "postmessage4", likesCount: 2},
                            {id: 5, message: "postmessage5", likesCount: 100},
                            {id: 6, message: "postmessage6", likesCount: 98},
                        ],
                        newPostText: ""
                    }

const profileReducer = (state = initialState, action) => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 7,
            message: state.newPostText,
            likesCount: 7
        };
        state.posts.push(newPost);
        state.newPostText = "";
        return state;
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText;
        return state;
    }
    return state;
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;
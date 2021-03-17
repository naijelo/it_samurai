const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageBody = action.body;
        return state;
    } else if (action.type === "SEND-MESSAGE") {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({id: 6, message: body});
        return state;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;

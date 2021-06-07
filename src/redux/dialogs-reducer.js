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
        ]
}


const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: body}]
            };
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;

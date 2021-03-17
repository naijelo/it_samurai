import React from "react";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    
    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBodyCreator={onMessageChange} 
                    addMessage={addMessage}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageBody={state.dialogsPage.newMessageBody}/>

}

export default DialogsContainer;
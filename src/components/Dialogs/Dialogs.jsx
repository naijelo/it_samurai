import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    
    let dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(mes =>
        <Message message={mes.message} />);

    let newMessageBody = state.newMessageBody;

    let addMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={onMessageChange}
                        value={newMessageBody} cols="20" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;
import React from "react";
import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    
    let dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = props.messages.map(mes =>
        <Message message={mes.message} key={mes.id} />);

    let newMessageBody = props.newMessageBody;

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.onMessageChange(body);
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea onChange={ onMessageChange } placeholder="Type Here"
                        value={newMessageBody} cols="20" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={ onAddMessage }>Add message</button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;
import {useMultiChatLogic}  from 'react-chat-engine-advanced';
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'a4ce4869-8bb5-418b-b921-014b0232c005', 
        props.user.username, 
        props.user.secret
    );
    return <div style={{height: '90vh'}}>
       <PrettyChatWindow
        {...chatProps}
        style={{height: '100%'}}
      />
    </div>;
};
export default ChatsPage;
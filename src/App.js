import {ChatEngine} from 'react-chat-engine';
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import './App.css';

const App =()=>{
    if(!localStorage.getItem('username')) return<LoginForm/>
    return(
        <ChatEngine
        height="100vh"
        projectID="
        f4ab85b3-fdc1-4666-b085-68b3c7054c31"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        RenderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        
        />
    );
}
export default App;
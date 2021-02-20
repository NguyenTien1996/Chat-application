import React from 'react';

import { ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
            height="100vh"
            projectID="3fe7ce7a-0eba-4cf5-9fb0-97c23f8fc115"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;
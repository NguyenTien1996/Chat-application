import React from 'react';

import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="3fe7ce7a-0eba-4cf5-9fb0-97c23f8fc115"
            userName="NguyenTien"
            userSecret="1234"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}
export default App;
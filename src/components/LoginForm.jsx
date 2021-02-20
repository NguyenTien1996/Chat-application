import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username , setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID' : "3fe7ce7a-0eba-4cf5-9fb0-97c23f8fc115" , 'User-name' : username , 'User-Secret' : password};
        try{
            //userName / password => chatengine -> give me
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password',password);


            window.location.reload();
            //works out -> logged in
        }catch(error){
            //error -> try with new username ...
            setError('Oops, incorrect credentials');
        }

    }
    return(
        <div className="wrapper">
            <div className="from">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div className="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
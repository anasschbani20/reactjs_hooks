import {createContext, useContext, useState} from "react";

const User = () => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <h1>User {username}</h1>
        </div>
    )
};

const Login = () => {
    const {setUsername} = useContext(AppContext);
   return (
       <div>
           <input onChange={event => setUsername(event.target.value)} placeholder={'ex ..'}/>
       </div>
   )
};

const AppContext = createContext(null);

export const ContextTutorial = () => {
    const [username, setUsername] = useState('');
    return (
        <div>
            <h1>Context Tutorial</h1>
            {/*<Login setUsername={setUsername} /> <User username={username}/>*/}
            <AppContext.Provider value={{username, setUsername}}>
                <Login />
                <User />
            </AppContext.Provider>
        </div>
    )
};


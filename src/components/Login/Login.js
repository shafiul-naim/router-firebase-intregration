import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const {signInWithGoogle} = useFirebase();

    return (
        <div>
            <h3>this is log in</h3>
            <div style={{margin: '20px'}}>
            <button onClick={signInWithGoogle}>Google sign in</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='password' /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
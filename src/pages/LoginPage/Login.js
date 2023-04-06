import { useHistory } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';

import classes from './Login.module.css';
import CartContext from '../../components/store/cart-context';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(CartContext);
    const history = useHistory();

    const switchModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    }

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        authCtx.userIdentifier(enteredEmail);
 
        let url;
        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3g3lwJCpxIdAJCsmq4FZEPr4ZQTWjv9Q'
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3g3lwJCpxIdAJCsmq4FZEPr4ZQTWjv9Q'
        }
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            // console.log(res);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = "Authenticatiion failed";
                    throw new Error(errorMessage)
                })
            }
        })
            .then((data) => {
                // console.log(data);
                authCtx.login(data.idToken, enteredEmail);
                history.replace('/store');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <form className={classes['login-card']} onSubmit={formSubmitHandler}>
            <h3>{isLogin ? 'Login' : 'Sign up'}</h3>
            <div className={classes['login-email']}>
                <label htmlFor="email">E-mail</label><br />
                <input type="email" ref={emailInputRef} required />
            </div>
            <div className={classes['login-password']}>
                <label htmlFor="password">Password</label><br />
                <input type="password" ref={passwordInputRef} required />
            </div>
            <button >{isLogin ? 'Login' : 'Sign up'}</button>
            <div>
                <p onClick={switchModeHandler} style={{cursor: 'pointer'}} >
                    {isLogin ? 'create new account?' : 'Already have account? Login'}
                </p>
            </div>
        </form>
    )
}

export default Login;
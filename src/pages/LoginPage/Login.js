import { useHistory } from 'react-router-dom';
import { useContext, useRef } from 'react';

import classes from './Login.module.css';
import CartContext from '../../components/store/cart-context';

const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(CartContext);
    const history = useHistory();

    const formSubmitHandler = async (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

       await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyChZiVkc1IQ751hftzGQhgtueZoJwgjZ3c', {
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
              authCtx.login(data.idToken);
              history.replace('/store');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <form className={classes['login-card']} onSubmit={formSubmitHandler}>
            <h3>Login</h3>
            <div className={classes['login-email']}>
                <label htmlFor="email">E-mail</label><br />
                <input type="email" ref={emailInputRef} />
            </div>
            <div className={classes['login-password']}>
                <label htmlFor="password">Password</label><br />
                <input type="password" ref={passwordInputRef} />
            </div>
            <button >Login</button>
        </form>
    )
}

export default Login;
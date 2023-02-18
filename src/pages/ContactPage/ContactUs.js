import React, {useState} from 'react';
import classes from './ContactUs.module.css';

const ContactUs = () => {
    const [enteredName, setEnteredName]= useState('');
    const [enteredEmail, setEnteredEmail]= useState('');
    const [enteredNumber, setEnteredNumber]= useState('');

    const formSubmitHandler = async (event) =>{
        event.preventDefault();
        const contactInfo = {
            name: event.target.name.value,
            email: event.target.email.value,
            number: event.target.number.value,
        }
        // console.log(contactInfo);
       const response = await fetch('https://e-commerce-b6c32-default-rtdb.firebaseio.com/cantact.json',{
            method: 'POST',
            body: JSON.stringify(contactInfo),
            headers: {
                'Contact-Type': 'application/json'
            }            
        })
        const data = await response.json();
        console.log(data);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredNumber('');
    }

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value);
    }
    const numberChangeHandler = (event) =>{
        setEnteredNumber(event.target.value);
    }


    return (
        <section className={classes['contact-section']}>
            <h3>Enter Your Details</h3>
            <form onSubmit={formSubmitHandler} >
                <div className={classes['contact-name']}>
                    <label htmlFor='name'>Name</label><br />
                    <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className={classes['contact-email']}>
                    <label htmlFor='email'>E-mail</label><br />
                    <input type='email' id='email'  value={enteredEmail} onChange={emailChangeHandler} />
                </div>
                <div className={classes['contact-number']}>
                    <label htmlFor='number'>Phone number</label><br />
                    <input type='telephone' id='number'  value={enteredNumber} onChange={numberChangeHandler} />
                </div>
                <button type='submit'>Sumbit</button>
            </form>
        </section>
    )
}

export default ContactUs;
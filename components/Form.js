'use client'
import React, { useState } from 'react'
import { useRef } from 'react'

const Form = () => {
    const emailInp = useRef()

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);

    const handleChange = (event) => {
        setEmail(event.target.value);
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailRegex.test(email);
        setIsValidEmail(isValid);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Validate email using regular expression
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailRegex.test(email);

        setIsValidEmail(isValid);
        
        if (isValid) {
        // Perform further actions for a valid email
        console.log('Email is valid:', email);
        } else {
            console.log("Email is invalid")
        }
    };
    
    return (
        <form className='md:max-w-lg'  onSubmit={handleSubmit}>
            <div className='pb-6'>
            <div className='flex justify-between text-xs lg:text-sm font-semibold'>
                <label className='' htmlFor='email'>Email address</label>
                <label className={isValidEmail ? "hidden" : "text-red-400 invalid-txt"} htmlFor='email' >Valid email required</label>
            </div>
            <input 
            ref={emailInp}
            className={isValidEmail ? "inp-email border-slate-300 bg-white focus-visible:border-gray-950" : "inp-email text-red-400 border-red-400 bg-red-400 bg-opacity-10 focus-visible:border-red-400 "} 
            placeholder='email@company.com' 
            type='email' 
            id='email' 
            value={email}
            onChange={handleChange}
            required/>

            </div>
            <input className='inp font-medium' type='submit' value='Subscribe to monthly newsletter'/>
        </form>
    )
}

export default Form
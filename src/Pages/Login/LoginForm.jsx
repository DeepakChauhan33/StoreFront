import { div, form, h1, pattern } from 'framer-motion/client';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const LoginForm = () => {


    const [isLogin, setIslogin] = useState(false);

    // EMAIL
    const [email, setEmail] = useState("");

    // PASSWORD
    const [password, setPassword] = useState("");

    // ERROR MESSAGE
    const [errMsg, setErrMsg] = useState({
        emailError: "",
        passwordError: ""
    })

    // 
    const [fromValid, setFormValid] = useState(false);


    // CHECK EMAIL VALIDATION USING REGEX 
    const validateEmail = (email) => {

        let emailError = errMsg.emailError;
        let isValid = fromValid;
        let pattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

        if (!pattern.test(email.trim())) {
            emailError = "Enter a valid email"
            isValid = false;
        } else {
            emailError = "";
            isValid = true;
        }

        setEmail(email.trim());
        setErrMsg({ ...errMsg, emailError });
        return isValid;

    }



    // CHECK PASSWORD VALIDATION USING REGEX 

    const validatePassword = (password) => {

        let passwordError = errMsg.passwordError;
        let isValid = fromValid;
        let pattern = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


        if (!pattern.test(password.trim())) {
            passwordError = "Password have minimum 8 characters, uppercase letter, digit(0-1) and special character";
            isValid = false;
        } else {
            passwordError = "",
                isValid = true;
        }

        setPassword(password.trim());
        setErrMsg({ ...errMsg, passwordError });
        return isValid;
    }



    const handleChange = (e) => {
        if (e.target.id === "email") {
            validateEmail(e.target.value);
        }

        else if (e.target.id === "password") {
            validatePassword(e.target.value);
        }
    }


    const handleSubmit = (e) => {

        e.preventDefault();

        if (validateEmail(email) && validatePassword(password)) {
            setIslogin(true);
            toast.success('Login Successfuly')
        }
    }

    return (
        <div>
            {isLogin === false ?
                (<form className='w-full rounded-xl p-2 lg:p-4 space-y-6'
                    onSubmit={handleSubmit}
                >
                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                            className='px-2 py-3 border border-gray-500 rounded-md' />
                        <p className='text-sm font-bold text-red-500'>{errMsg.emailError}</p>
                    </div>

                    <div className='flex flex-col space-y-2'>
                        <label htmlFor="name" className='font-bold'>Password</label>
                        <input
                            type="password"
                            id='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                            className='px-2 py-3 border border-gray-500 rounded-md' />
                        <p className='text-sm font-bold text-red-500'>{errMsg.passwordError}</p>
                    </div>

                    <p className='text-end text-md font-normal  text-blue-700 cursor-pointer '>forget password?</p>

                    <button className=' w-full py-2.5 rounded-md mt-4 bg-blue-400 hover:bg-blue-600/80 cursor-pointer'>
                        Submit
                    </button>
                </form>)

                : (<h1>Submitted Sucessfuly</h1>)}
        </div>
    )
}

export default LoginForm

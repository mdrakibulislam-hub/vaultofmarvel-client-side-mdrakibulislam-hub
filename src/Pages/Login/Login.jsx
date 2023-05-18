import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {


    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'



    const { user, setUser, handleFormLogin, handleGoogleLogin, handleGithubLogin } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');


    // Regurler expressions
    const emailREGX = /\S+@\S+\.\S+/
    const passwordREGX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


    // form validation errors
    const [emailError, setEmailError] = useState("")
    const [passError, setPassError] = useState("")
    const [loginError, setLoginError] = useState("")


    // login funcitonalitys 

    const handleLogin = (event) => {
        event.preventDefault();

        if (!emailREGX.test(email)) { setEmailError("Please provide a valid email address"); return }
        if (!passwordREGX.test(password)) { setPassError("Password must contain Minimum eight characters, at least one letter and one number"); setEmailError(""); return }

        handleFormLogin(email, password).then(result => {
            console.log("success is", result)
            navigate(from, { replace: true })
            setLoginError("")
        })
            .catch(error => setLoginError(error.message))
        setEmailError("")
        setPassError("")
    }

    const handleGoogleSignInClick = () => {
        handleGoogleLogin().then(result => {
            setUser(result.user)
            navigate(from, { replace: true })
        })
            .catch(error => console.log("error is", error))
    }

    const handleGithubSignInClick = () => {
        handleGithubLogin().then(result => {
            setUser(result.user)
            navigate(from, { replace: true })
        })
            .catch(error => console.log("error is", error))
    }



    if (user) {
        return <Navigate to="/" ></Navigate>;
    }

    return (
        <div className="relative flex flex-col justify-center my-16 overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md border lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-black dark:text-white">
                    Login
                </h1>
                <form onSubmit={handleLogin} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            id='email'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        <p className='text-red-700'><small>
                            {emailError ? emailError : ""}
                        </small></p>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            id='password'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />

                        <p className='text-red-700'><small>
                            {passError ? passError : ""}
                        </small></p>

                    </div>
                    <Link
                        to="/forgetpassword"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </Link>
                    <div className="mt-6">
                        <button type='submit' className="btn border-none w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-[#FFE382] rounded-md hover:text-white">
                            Login
                        </button>
                    </div>

                    <p className='text-red-700'><small>
                        {loginError ? loginError : ""}
                    </small></p>

                </form>


                <div className='flex gap-4 justify-center items-center my-8'>


                    <button onClick={handleGoogleSignInClick} className='flex tooltip gap-2 items-center text-white btn bg-blue-700 hover:bg-blue-800 border-none' data-tip="Login with Google">
                        <span>Login with</span> <FaGoogle></FaGoogle>
                    </button>

                    <button onClick={handleGithubSignInClick} className='flex tooltip gap-2 items-center text-white btn bg-gray-800 hover:bg-gray-900 border-none' data-tip="Login with GitHub">
                        <span>Login with</span> <FaGithub></FaGithub>
                    </button>



                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
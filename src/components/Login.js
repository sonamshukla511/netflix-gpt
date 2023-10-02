import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

const [isSignInForm,setIsSignInForm] = useState(true);


const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
}
  return (
    <div>
      <Header />
      <div className="absolute">
      <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt = "logo" />
      </div>
      <form className = "absolute p-10 m-10 bg-black my-34 mx-auto w-3/12 right-0 left-0 bg-opacity-80 text-white">
        <h1 className="text-white"> {isSignInForm ? "Sign In" : "Sign Up "} </h1>
       {!isSignInForm && ( <input type='text' placeholder='Full Name' className="p-2 m-4 w-full bg-gray-700" /> )}
        <input type ="text" placeholder='Email Address' className="p-2 m-4 w-full bg-gray-700" />
        <input type ="password" placeholder='Password' className="p-2 m-4 w-full  bg-gray-700" />
        <button className=" bg-red-600 p-4 m-4 w-full rounded-lg"> {isSignInForm ? "Sign In" : "Sign Up "}</button>
        <p  className="py-7  cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Already Registered ! Sign In" : "New to Netflix ? Sign up Now "}  </p>
      </form>
     
    </div>
  )
}

export default Login
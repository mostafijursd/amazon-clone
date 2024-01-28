import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import  {RotatingLines } from 'react-loader-spinner';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/AmazonSlice';
function Signin() {
  const dispatch=useDispatch();
  const auth = getAuth();
  const navigate=useNavigate();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
   const[errEmail,setErrEmail]=useState("");
   const[errPassword,setErrPassword]=useState("");

// firbase error
const[userEmailErr,setUserEmailErr]=useState("");
const[userPassErr,setUserPassErr]=useState("")
const[loding,setLoading]=useState(false);
const[successMsg,setSuccessMsg]=useState("");


  const handleEmail=(e)=>{
    setEmail(e.target.value);
    setErrEmail("");
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
    setErrPassword("");
  }

const handleLogin=(e)=>{
  e.preventDefault()

  if(!email){
    setErrEmail("Enter your email")
  }
  if(!password){
    setErrPassword("Enter your password")
  }
  if(email && password){
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(setUserInfo({
      _id:user.uid,
      userName:user.displayName,
      email:user.email,
      image:user.photoURL

    }))
    
    // ...
    setLoading(false)
    setSuccessMsg("Login SuccessFull! Welcome you back");
    setTimeout(() => {
      navigate("/")
    }, 2000);
  })
  .catch((error) => {
    const errorCode = error.code;
      if(errorCode.includes("auth/invalid-email")){
        setUserEmailErr("Invalid Email");
      }
      if(errorCode.includes("auth/worng-email")){
        setUserPassErr("Wrong password! try again");
      }
      console.log("something is up ,Try with correct Credential!");
  });

    setEmail("");
    setPassword("");
  }
}

  return (
    <div  className='w-full'>
        <div className='w-full bg-gray-100 pb-10'>

     {successMsg ? ( <div  className='w-full flex justify-center  items-center py-32'> <p className=' font-titleFont font-semibold text-green-500 border-[1px] border-green-500 text-lg px-6 py-2 '>{successMsg}</p></div>):   (    <form   className='w-[350px] mx-auto flex flex-col items-center'>
     <Link to="/">
     <img className='w-32' src="https://imgur.com/e5wQXJq.png"  />
     </Link>
      <div  className='w-full border border-zinc-200 p-6'>
        <h2  className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
        <div className=' flex flex-col gap-3'>
      
          <div className='flex flex-col gap-2'>
      <p  className='text-sm font-medium'>Email or mobile phone number</p>
      <input   onChange={handleEmail}
      value={email}
      
        className='w-full lowercase py-1 boder border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
      focus-within:shadow-amazoncloneInput duration-100' type="email" />
      {
      errEmail &&(
        <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> 
        <span  className='italic font-titleFont font-extrabold text-base'>!</span>{" "}
        {errEmail}</p>
      ) 
      }
      {
      userEmailErr &&(
        <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> 
        <span  className='italic font-titleFont font-extrabold text-base'>!</span>{" "}
        {userEmailErr}</p>
      ) 
      }
          </div>
          <div className='flex flex-col gap-2'>
      <p  className='text-sm font-medium'>password</p>
      <input   onChange={handlePassword}
               value={password} 
      className='w-full lowercase py-1 boder border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
      focus-within:shadow-amazoncloneInput duration-100' type="password" />
      {
      
      errPassword &&(
        <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> 
        <span  className='italic font-titleFont font-extrabold text-base'>!</span>{errPassword}</p>
      ) 
      }
      {
      userPassErr &&(
        <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> 
        <span  className='italic font-titleFont font-extrabold text-base'>!</span>{userPassErr}</p>
      ) 
      }
          </div>
          <button   onClick={handleLogin}  className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f0be53] hover:bg-gradient-to-b border border-zinc-400
          active:border-yellow-800 active:shadow-amazoncloneInput'>contiune
          </button>
          {
          loding && (
          
            <div  className='flex justify-center'>
            
            <RotatingLines
        strokeColor="#febd69"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
            </div>
          )
          
          }
      
        </div>
        <p  className='text-xs text-black leading-4 mt-4'>By Continuing ,you agree to Amazon's <span className='text-blue-600'> Condition of Use{""} </span>and
         <span className='text-blue-600'> Privace Notice </span></p>
         <p  className='text-xs text-gray-600 mt-4 cursor-pointer group '><ArrowRightIcon/> <span  className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help?</span></p>
      
         
      </div>
      <p  className='w-full text-xs text-gray-600 mt-4 flex items-center'>
          <span className='w-1/3 h-[1px] bg-zinc-400  inline-flex'></span>
         <span className='w-1/3 text-center' > New to Amazon ?</span>
         
         <span  className='w-1/3 h-[1px] bg-zinc-400'></span>
         
         </p>
        <Link className='w-full' to="/registration">
        <button  className='w-full py-1.5 mt-4 text-sm font-normal rounded-sm bg-gradient-to-t
          from-slate-200 to-slate-100 hover:bg-gradient-to-b border border-zinc-400
          active:border-yellow-800 active:shadow-amazoncloneInput'>Create your Amazon account </button>
        </Link>
           </form>
           )
     }
     </div>

<div className='w-full bg-gradient-to-t from-white  via-white to-zinc-200 flex flex-col gap-4 justify-center items-center py-10'>
<div  className='flex items-center gap-6 '>
<p className='text-xs text-blue-600 hover:text-orange-600 hover:underline
 underline-offset-1 cursor-pointer duration-100'>Conditions of User</p>
 <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline
 underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
 <p className='text-xs text-blue-600 hover:text-orange-600 hover:underline
 underline-offset-1 cursor-pointer duration-100'>Privacy Notice</p>
</div>
<p  className='text-xs text-gray-600'>© 1996-2024, ReactBd.com or its affiliates</p>
</div>

    </div>
  )
};

export default Signin ;
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { motion } from 'framer-motion';

function Registration() {
  const navigate=useNavigate();
  const auth = getAuth();
  const [clientName,setClientName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[cPassword,setCPassWord]=useState("");
// Error Massage start 
  const[errClientName,setErrClientName]=useState("");
  const[errEmail,setErrEmail]=useState("");
  const[errPassword,setErrPassword]=useState("");
  const[errCPassword,setErrCPassword]=useState("");
   const[firebaseErr,setFirbaseErr]=useState("");


// loding state start
const[loding,setLoading]=useState(false);
const[successMsg,setSuccessMsg]=useState("");


// Handle function start
 const handleName=(e)=>{
  setClientName(e.target.value);
  setErrClientName("");
 };
 const handelEmail=(e)=>{
setEmail(e.target.value);
setErrEmail("");
 };
const handlePassword=(e)=>{
setPassword(e.target.value);
setErrPassword("");
};
const handleCpassword=(e)=>{
  setCPassWord(e.target.value);
  setErrCPassword("");
};




// Email validation start
 const emailValidation=()=>{
    return String(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
 };





 // Submit button start
  const handleRegistration=(e)=>{
    
e.preventDefault()
if(!clientName){
  setErrClientName("Enter your name")
}
if(!email){
  setErrEmail("Enter your email")
  firebaseErr("")
}else{
  if(!emailValidation(email)){
    setErrEmail("Enter your valid email")
  }
}
if(!password){
  setErrPassword("Enter your password")
}else{
  if(password.length<6){
    setErrPassword("password must be at least 6 characters")
  }
}
if(!cPassword){
  setErrCPassword(" Confirm your password")
}else{
  if(cPassword !== password){
    setErrCPassword("Password not matched")
  }


if(clientName && email && emailValidation(email) && password.length>=6 && cPassword && cPassword===password)
{
setLoading(true)
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    updateProfile(auth.currentUser,{
      displayName:clientName,
      photoURL:"https://i.imgur.com/qu8FXCC.png",
    });
    // Signed up 
    const user = userCredential.user;
    
    setLoading(false);
    setSuccessMsg("Account  Created SuccessFully! ");
    setTimeout(() => {
      navigate("/signin")
    }, 3000);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    
    if(errorCode.includes("auth/email-already-in-use")){
      setFirbaseErr("Email Already in use ,try another one")
    }
    // ..
  });
setClientName("");
setEmail("");
setPassword("");
setCPassWord("");
setErrCPassword("");
setFirbaseErr("");
}

}
  }
  return (
    <div  className='w-full '>
        <div className='w-full bg-gray-100 pb-10 '>
<form className='w-[350px] mx-auto flex flex-col items-center'>

<Link to="/">
<img className='w-36' src="https://imgur.com/e5wQXJq.png"  />
</Link>
<div className='w-full border border-zinc-200 p-6'>
    <h2  className='font-titleFont text-3xl font-medium mb-4'>Create Account</h2>
    <div className='flex flex-col gap-3'>
        <div  className='flex flex-col gap-2'>
            <p  className='text-sm font-medium'>Your Name</p>
            <input onChange={handleName} 
                    value={clientName}
                   type="text"
            className='w-full  py-1 boder border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
focus-within:shadow-amazoncloneInput duration-100'  />

{

 errClientName &&(
   <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> <span  className='italic font-titleFont font-extrabold text-base'>!</span>{" "}
   {errClientName}</p>
 ) 
}
        </div>
        <div className='flex flex-col gap-2'>
        <p  className='text-sm font-medium'>Email or mobile number</p>
            <input onChange={handelEmail} 
                   value={email}
                    type="email"
            className='w-full  py-1 boder border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
focus-within:shadow-amazoncloneInput duration-100' />

{  errEmail &&(
  <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> 
  <span  className='italic font-titleFont font-extrabold text-base'>!</span>{" "}
  {errEmail}</p>
) 
}
{  firebaseErr &&(
  <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> 
  <span  className='italic font-titleFont font-extrabold text-base'>!</span>{" "}
  {firebaseErr}</p>
) 
}


        </div>
        <div className='flex flex-col gap-2'>
        <p  className='text-sm font-medium'>Password</p>
            <input onChange={handlePassword}
               value={password}
            type="password"
             className='w-full  py-1 boder border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
focus-within:shadow-amazoncloneInput duration-100'  /> 


{

errPassword &&(
  <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> <span  className='italic font-titleFont font-extrabold text-base'>!</span>{errPassword}</p>
) 
}
        </div>
        <div className='flex flex-col gap-2'>
        <p  className='text-sm font-medium'>Re-enter password</p>
            <input onChange={handleCpassword} 
                    value={cPassword}
                    type="password"
            className='w-full  py-1 boder border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] 
focus-within:shadow-amazoncloneInput duration-100' />
{

errCPassword &&(
  <p  className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'> <span  className='italic font-titleFont font-extrabold text-base'>!</span>{" "}
  {errCPassword}</p>
) 
} 
<p className='text-xs text-gray-600'>Password must be at least 6 characters</p> 
        </div>
        <button  onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal rounded-sm bg-gradient-to-t from-[#f0be53] hover:bg-gradient-to-b border border-zinc-400
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

    {
    successMsg && (
      <div>
      <motion.p initial={{y:10,opacity:0}} 
                animate={{y:0,opacity:1}} 
                transition={{ duration:0.5}}
           className='text-base font-titleFont font-semibold text-green-500 border-[1px]'  >{successMsg}</motion.p>
      </div>
    )
    }
    </div>
    <p  className='text-xs text-black leading-4 mt-4'>By Continuing ,you agree to Amazon's <span className='text-blue-600'> Condition of Use{""} </span>and
   <span className='text-blue-600'> Privace Notice </span></p>
   <p  className='text-xs text-gray-600 mt-4 cursor-pointer group '> <span  className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1'>Need help?</span></p>
   <div className=''>
    <p  className='text-xs text-black group'>Already have an account ? {" "}
    <Link to="/signin">

    <span  className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100'>Sign in  
     <span><ArrowRightIcon/></span></span>
    </Link>
     </p>
     <p className='text-xs text-black group' >Buying for work?<span className='text-blue-600 group-hover:text-orange-700 group-hover:underline underline-offset-1 cursor-pointer duration-100'>Ceate a free business account</span></p>
   </div>

</div>
</form>
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

export default Registration;
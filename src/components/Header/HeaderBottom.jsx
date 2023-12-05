import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import SideNav from './SideNav';
import{motion} from 'framer-motion'
function HeaderBottom() {
    const ref=useRef();
    const[sidebar,setSidebar]=useState(false)
    useEffect(()=>{
document.body.addEventListener("click",(e)=>{
    if(e.target.contains(ref.current))
    {
        setSidebar(false)
    }
})
    },[ref,setSidebar])
  return (
    <div  className='w-full px-4 h-[36px] bg-amazonclone_light text-white '>
{/*   ListItems start here*/}
<ul className='flex items-center gap-2 text-sm tracking-wide'>
    <li  onClick={()=>setSidebar(true)} className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100 gap-2'> < MenuIcon/> All </li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'> Today's Deals</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'> Customer Service</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'> Gift Cards</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>Registry</li>
    <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>Sell</li>
</ul>
{/*   ListItems end here*/}
{/*   sideNav start here*/}

{


    sidebar && (
        <div  className=' w-full h-screen text-black fixed top-0 left-0 bg-amazonclone_blue bg-opacity-50 '>
<div className='w-full h-full relative'>

<motion.div initial={{x:-500,opacity:0}}  ref={ref} animate={{x:0, opacity:1}} transition={{duration:.5}} className='w-[350px] h-full bg-white border border-black'>
<div  className='w-full bg-amazonclone_light text-white py-2 px-6 flex items-center gap-4'>
<AccountCircleIcon/> 
<h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello ,Sign in</h3>
</div>
<SideNav title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Music" />
<SideNav title="Shop By Department" one="Electronics"  two="Computer"  three="Smart Home" />
<SideNav title="Programs & Features" one="Gifts Cards"  two="Amazon live"  three="international Shopping" />
<SideNav title="Help & Settings" one="Your Account"  two="Customer Service"  three="English" />

<span  onClick={()=>setSidebar(false)}   className='  cursor-pointer absolute top-0 left-[360px] w-10 h-10 text-black 
 flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300'><CloseIcon/></span>
 </motion.div>
</div>
 </div>
    )
} 

{/*   sideNav start here*/}




    </div>
  )
}

export default HeaderBottom
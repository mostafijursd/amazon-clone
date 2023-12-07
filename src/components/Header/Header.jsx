import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {allitem} from '../constants/index'
import HeaderBottom from './HeaderBottom';

function Header() {
  const [showAll,setShowAll]=useState(false);
  
  return (
    <div   className='w-full sticky top-0 z-50 '>
      <div  className=' w-full  bg-amazonclone_blue  text-white mx-auto  px-4  py-3  flex  items-center gap-4'>
{/*       Image start here     */}
<div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
  <img className='w-24 mt-2' src="https://imgur.com/RQcAa9T.png"  />
</div>
{/*       Image End here     */}
{/*       Deliver start here   */}
<div className="px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100">
< LocationOnIcon/>
<p className='text-sm text-ligthText font-light flex flex-col'>Deliver to {""}
<span className='text-cm font-semibold  -mt-1 text-whiteText'>Kolkata</span> </p>
</div>
{/*       Deliver end here   */}
{/*       Search start here   */} 

<div className='h-9 rounded-md flex flex-grow relative border-2'>

  <span  onClick={()=>setShowAll(!showAll)}  className='w-12 h-full  bg-gray-200 hover:bg-gray-200  border-2 cursor-pointer 
  duration-300 text-sm  text-amazonclone_blue  font-titleFont  flex items-center justify-center rounder-tl-md rounded-bl-md'>All <span><ArrowDropDownIcon /></span>
  </span>


{

showAll && (
  <div>
    <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden
     bg-white border-[1px] border-amazonclone_blue text-black p-2 flex-col gap-1 z-50'>
      {/* <li  className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent
       hover:border-b-amazonclone_blue  cursor-pointer duration-300'>All  Departments</li>
        */}

        {
          allitem.map((item)=>(
            <li  className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent
            hover:border-b-amazonclone_blue  cursor-pointer duration-300' key={item._id}>{item.title}</li>
          ))
        }
    </ul>
  </div>
)




}


  <input  className=' h-full text-base text-amazonclone_blue flex-grow outline-none border-none px-2' type="text" placeholder='Serach Amazon.in' />
  <span className='w-12 h-full flex items-center justify-center 
   bg-amazonclone_yellow hover:bg-[#f3a847] duration-300 text-amazonclone_blue cursor-pointer rounder-tr-md rounded-br-md'>
    <SearchIcon/></span>
</div>
{/*       Search end  here   */}
{/*       Signin start  here    */}

<div  className=' flex-col  justify-center px-2 h-[80%] flex items-start border border-transparent hover:border-white cursor-pointer duration-100  '>


  <p className=' text-sm text-ligthText font-light flex flex-col'>Hello , sign in</p>
  <p>Accounts & Lists <span><ArrowDropDownIcon /></span></p>
</div>
{/*       Signin end  here   */}
{/*        Orders start here    */}

<div className='px-2 h-[80%] flex flex-col items-center border border-transparent hover:border-white cursor-pointer duration-100'>
<p  className='text-sm text-ligthText font-light flex flex-col'>Returns</p>
<p className='text-sm font-semibold -mt-1 text-white'> & Orders</p>

</div>

{/*       Orders end here    */}

{/*    Cart  start here    */}

<div className='px-2 h-[80%] flex  items-start  justify-center border border-transparent hover:border-white cursor-pointer duration-100  relative'>
<ShoppingCartIcon/>
  <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span  className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-amazonclone_yellow rounded-full  flex justify-center items-center'>0</span></p>
</div>

{/*     Cart  end here     */}


</div>
<HeaderBottom/>
    </div>
  )
}

export default Header
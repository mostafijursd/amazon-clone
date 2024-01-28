import React from 'react'
import { footerBottomItem } from '../constants'

function FooterBottom() {
  return (
    <div  className='w-full bg-footerBottom py-8'>

<div className='max-w-5xl mx-auto px-4'>
<div className='w-full grid grid-cols-3 md:grid-cols-3  mdl:grid-cols-6  lgl:grid-cols-7 gap-3 place-content-center text-gray-400 '>
{
footerBottomItem.map((item)=>(
  <div className='group cursor-pointer' key={item._id}>
    <h3  className='w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px] '>{item.title}</h3>
    <p className='w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3'>{item.des}</p>
  </div>
))
}
</div>
</div>
   <div  className='w-full bg-gradient-to-t text-[#999] flex flex-col gap-2 justify-center items-center py-4' >
<div  className=' flex justify-end gap-2 '>
  <p  className='text-xs text-gray-400'>Conditions of Use</p>
  <p  className='text-xs text-gray-400'>Privacy Notice</p>
  <p  className='text-xs text-gray-400'>
Your Ads Privacy Choices</p>


</div>
<p className='text-xs text-gray-400'>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
   </div>
    </div>
  )
};

export default FooterBottom;
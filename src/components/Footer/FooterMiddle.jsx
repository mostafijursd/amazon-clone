import React from 'react'
import FooterMiddleList from './FooterMiddleList'
import { middleList } from '../constants'
function FooterMiddle() {
  return (
    <div  className='w-full bg-amazonclone_light text-white'>
{/* Top start here   */}

<div  className='w-full border-b-[1px]  border-gray-500 px-10'>
<div  className='max-w-5xl mx-auto text-gray-300  '>

<div  className='w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6 md:place-items-start md:items-start'>

{

  middleList.map((item)=>(
    <FooterMiddleList  key={item._id}
    title={item.title}
    listItem={item.listItem}
    />
  ))
}

</div>
</div>


</div>

{/* Top   end here   */}
{/* bottom start here   */}

<div className='w-full flex gap-6 items-center justify-center py-6'>
  <div>
<img   className='w-20 pt-3' src="https://imgur.com/RQcAa9T.png"  />
  </div>
<div className='flex gap-2'>
<p  className='flex gap-1 items-center justify-center border border-gray-500
 hover:border-amazonclone_yellow cursor-pointer duration-200 px-2 py-1'>English</p>
</div>
<div className='flex gap-1 items-center justify-center border border-gray-500
 hover:border-amazonclone_yellow cursor-pointer duration-200 px-2 py-1'>
  <img   className='w-6'src="https://imgur.com/dvmdC2E.jpg" />
  <p>India</p>
</div>
</div>
{/* bottom end here   */}



    </div>
  )
}

export default FooterMiddle
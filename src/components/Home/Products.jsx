
import { useLoaderData } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ApiIcon from '@mui/icons-material/Api';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Products() {
const data=useLoaderData();
  const  productsData = data.data;
  

  return (
     <div  className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-10  gap-6 px-4  ">
{
productsData.map((item)=>(
  <div key={item.id} className="bg-white h-auto border-[1px] border-gray-200 py-8 z-30  hover:border-transparent shadow-none
   hover:shadow-testShadow duration-200  flex flex-col gap-4 relative ">
    <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-700">{item.category}</span>
<div className=" w-full h-auto flex items-center justify-center relative group ">

    <img  className="w-52 h-64 object-contain " src={item.image}   alt='productImg' />
    <ul  className="w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-0 duration-700 ">
    <li  className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400  hover:bg-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
      Compare {" "} <span><ApiIcon/></span>
    </li>
    <li  className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400  hover:bg-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
      Add to Cart {" "} <span><ShoppingCartIcon/></span>
    </li>
    <li  className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400  hover:bg-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
      View Details {" "} <span><ArrowCircleRightIcon/></span>
    </li>
    <li  className="text-gray-600 hover:text-black text-sm font-medium border-b-[1px] border-b-gray-400  hover:bg-gray-700 flex items-center justify-end gap-2 hover:cursor-pointer duration-300 w-full">
      Add to With List {""}  <span><FavoriteIcon/></span>
    </li>
  </ul>
  </div>
  
 <div className="px-4 z-10 bg-white">
  
 <div  className="flex items-center justify-between">
    <h2  className="font-titleFont tracking-wide text-lg text-amazonclone_blue font-medium">{item.title.substring(0,20)}</h2>
    <p className="text-sm text-gray-600 font-semibold ">${item.price}</p>
  </div>
  <div>
    <p  className="text-sm mb-1">{item.description.substring(0,100)}...</p>
    <div className=" text-yellow-500">
<StarIcon/>
<StarIcon/>
<StarIcon/>
<StarIcon/>
<StarIcon/>


    </div>
  </div>
  <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 
  to-yellow-200 border hover:from-yellow-300 hover:to-yellow border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
  active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3 ">Add to Cart</button>
 </div>
  </div>
))

}

    </div>
  )
}

export default Products
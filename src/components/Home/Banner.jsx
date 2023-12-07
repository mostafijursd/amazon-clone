import React, { useState } from 'react'
import Slider from "react-slick";
function Banner() {

    const[dotAction,setDotAction]=useState(0)
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        sliderToShow:1,
        slidesToScroll:1,
        arrows:false,
        beforeChange:(prev,next)=>{
            setDotAction(next)
        },
        appendDots: dots => (
            <div
              style={{
               position:"absolute",
               top:"70%",
               left:"45%",
               transform:"translate(-50% -50%)",
               width:"210px"
              }}
            >
              <ul style={{ 
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between"



            }}> {dots} </ul>
            </div>
          ),
          customPaging: (i )=> (
            <div
              style={
                i===dotAction
               ? {
                width: "30px",
                height:"30px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"white",
                background:"#131921",
                cursor:"pointer",
                border:"1px solid #f3a847",

              } :
              {
                width: "30px",
                height:"30px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"white",
                background:"#131921",
                cursor:"pointer",
                border:"1px solid #f3a847",
              }
            }
            >
              {i + 1}
            </div>
          ),
      };
  return (
    <div  className='w-full '>
    <div className='w-full h-full relative  -z-50  '>
    <Slider {...settings}>
      <div>
       
      <img src="https://imgur.com/y6cAnIo.jpg" />
      </div>
      <div>
        <img src="https://imgur.com/FWfF8wt.jpg" />
      </div>
      <div>
        <img src="https://imgur.com/zzpwniW.jpg" />
      </div>
      <div>
        <img src="https://imgur.com/s36vbDW.jpg" />
      </div>
      <div>
        <img src="https://imgur.com/MPfC1yP.jpg" />
      </div>
    </Slider>
    </div>
   
  </div>
  )
}

export default Banner
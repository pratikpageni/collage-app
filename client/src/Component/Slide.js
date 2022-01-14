import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: " Photo 1 ",
    url: "https://thearyanschool.edu.np/media-files/slider/sliderImg-1524804644.jpg",
  },
  {
    name: " Photo 2 ",
    url: "https://thearyanschool.edu.np/media-files/slider/sliderImg-1563952852.jpg",
  },

  {
    name: " Photo 3 ",
    url: "https://thevakundo.com//admissions/1611561280421-aryannew1.jpg",
  },

  {
    name: " Photo 4 ",
    url: "https://i.ytimg.com/vi/cOQg3-IumY0/maxresdefault.jpg",
  },
];
class Slide extends Component {
  render() {
    const setting = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
    };
    
    return (

        <div className="slid">
     <slider {...setting}>
         {photos.map((photo) =>{
             return(
                 <div>
                     <img width="100" scr={photo.url}/>
                 </div>
             )


         } 
         )}


     </slider>
     </div>
    );
}
}

        
export default Slide;

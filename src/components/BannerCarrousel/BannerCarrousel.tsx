import {useEffect, useContext} from 'react';
import { GlobalContext } from '../../Contexts/DataContext';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import images from '../../assets/images';
import './BannerCarrousel.scss';

function BannerCarrousel() {
  const { adjustment, setAdjustment}: any = useContext(GlobalContext);
  
  const handleChange = () => {
    setAdjustment(window.innerWidth);
  }
  
  useEffect(()=> {
    window.addEventListener("resize", handleChange);
  }, [])

  return (
    <div className='banner'>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="myswiperbanner"
      >
        <SwiperSlide className='banner__img'>
          {adjustment <= 1024 
            ?  <img src={images.clothingBanner.src}></img>
            :  <img src={images.DesktopBanner3.src}></img>
          }    
        </SwiperSlide>
        <SwiperSlide className='banner__img'>
        {adjustment <= 1024 
            ?  <img src={images.coupleBanner.src}></img>
            :  <img src={images.DesktopBanner4.src}></img>
        } 
        </SwiperSlide>
        <SwiperSlide className='banner__img'>
        {adjustment <= 1024 
            ?  <img src={images.streetBanner.src}></img>
            :  <img src={images.DesktopBanner2.src}></img>
        }   
        </SwiperSlide>
        <SwiperSlide className='banner__img'>
        {adjustment <= 1024 
            ?  <img src={images.classygirlBanner.src}></img>
            :  <img src={images.DesktopBanner3.src}></img>
        }     
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default BannerCarrousel
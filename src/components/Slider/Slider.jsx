import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Slider.scss'
const Slider = () => {
    const [currentSlide,setCurrentSlide]=useState(0)
    const sliderImages=[
        'https://images.unsplash.com/photo-1574177556859-1362f72ed6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1599397142402-3bd33b21d599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80'

    ]
    const prevSlide=()=>{

        setCurrentSlide(currentSlide===0?2:(prev)=>prev-1)

    }

    const nextSlide=()=>{
        setCurrentSlide(currentSlide===2?0:(prev)=>prev+1)

    }
  return (
    <div className='slider' >
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}} >
            <img src={sliderImages[0]} alt="" />
            <img src={sliderImages[1]} alt="" />
            <img src={sliderImages[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <KeyboardArrowLeftIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <ChevronRightIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider
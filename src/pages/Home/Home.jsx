import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import './Homes.scss'
const Home = () => {

  

  return (
    <div className='home' >
      <Slider/>
      <FeaturedProducts type='featured'/>
      <FeaturedProducts type='trendy'/>
    </div>
  )
}

export default Home
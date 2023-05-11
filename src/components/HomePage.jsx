import React from 'react'
import "../styles/HomePage.scss"
import LogoPink from "../assets/Home/logo.png"
import BackGround from "../assets/Home/BackGroundPlane.jpg"

const HomePage = () => {
  return (
    <div className='GrandeDiv'>
    <div className='HomePage'>Holliday's Trip</div>
    <img src={LogoPink} className='LogoPink' alt='' />
    </div>
  )
};

export default HomePage
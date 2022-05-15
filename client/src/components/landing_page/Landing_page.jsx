import React from 'react'
import './landing_page.scss'
import main_image from '../../assets/images/cloud_image1.png'

export default function Landing_page() {
  return (
    <div id="landingPage">Landing_page
      <div className='nav'>
        <div className='wrapper'>
          <a className='aboutMe' href="#aboutMe">ABOUT ME</a>
          <a className='skills' href="#skills">SKILLS</a>
          <a className='contact' href="#contact">CONTACT</a>
        </div>
      </div>
      <div className='bottom_main'>
        <div className='left_title'>
          <h1 className='mainHeader'>Poepieee <br/> Abeyratne</h1>
          <h2 className='subHeader'>deVops enGineeR</h2>
        </div>
        <div className='right_image'>
          <img className='main_image' src={main_image} alt="my picture" />
        </div>
      </div>
    </div>
  )
}

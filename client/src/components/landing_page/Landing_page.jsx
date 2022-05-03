import React from 'react'
import './landing_page.scss'

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
      <div className='title'>
        <h1 className='mainHeader'>Ranindu <br/> Abeyratne</h1>
        <h2 className='subHeader'>deVops enGineeR</h2>
      </div>

    </div>
  )
}

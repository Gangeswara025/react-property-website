import React from 'react'
import './GetStarted.css'

export default function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Get Started with Homyz</span>
          <span className='secondaryText'>Subscribe and find your dream home
            <br />
            Get your daily dose of inspiration, tips, and exclusive offers on finding your perfect home.
          </span>
          <button className="button">
            <a href="mailto:jjgangeswara@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  )
}

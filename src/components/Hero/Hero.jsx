import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
// import * as ReactCountUpModule from 'react-countup';
// const CountUp = ReactCountUpModule && (ReactCountUpModule.default || ReactCountUpModule);
// import CountUp from 'react-countup/build/index.js'
import CountUpComponent from 'react-countup'
const CountUp = CountUpComponent.default || CountUpComponent;

export default function Hero() {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
        <div className='flexColStart hero-left'>
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className='secondaryText'>Find a variety of properties that suit you very easily</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color='var(--blue)' size={25} />
            <input type="text" />
            <button className='button'>Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={900} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={200} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={20} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>

        </div>

        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

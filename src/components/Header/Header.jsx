import React, { useState, useRef, useEffect } from 'react'
import './Header.css'
import { BiMenuAltRight } from 'react-icons/bi'

const OutsideClickHandler = ({ onOutsideClick, children }) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onOutsideClick]);

  return <div ref={wrapperRef} style={{ display: 'contents' }}>{children}</div>;
}

export default function Header() {
  const[menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src="./logo.png" alt="" width={100} />

        <OutsideClickHandler
        onOutsideClick={()=>{
          setMenuOpened(false)
        }}
        >
        <div className='h-menu flexCenter' style={getMenuStyles(menuOpened)}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Set Started</a>
          <button className='button'>
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>


        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>

    </section>
  )
}

import React from 'react'
import gsap from 'gsap';
import "./style.css"
const Test = () => {
  

    gsap.set(".box", { x: 100, y: 50, opacity: 0 });
  return (
    <div>
        <div className="box">
          
        </div>
    </div>
  )
}

export default Test
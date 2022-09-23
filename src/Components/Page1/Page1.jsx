import React from 'react'
import './Page1.css'

const Page1 = () => {
  return (
    <div className='page1 container'>
      <div className="page1-left">
        <h5>IT IS A GOOD TIME FOR THE GREAT TASTE OF BURGERS</h5>
        <h1>BURGER</h1>
        <h2>WEEK</h2>
      </div>
      <div className="page1-right">
        <img draggable={false} src="./images/intro-image.png" alt="" />
      </div>
    </div>
  )
}

export default Page1
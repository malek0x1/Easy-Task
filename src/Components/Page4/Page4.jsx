import React from 'react'
import { useState } from 'react'
import './Page4.css'
const Page4 = () => {
    const [selected, setSelected] = useState(0)
    const data = ["upcoming evenets", "Second", "Third"]
    const imgs = ["./images/hamburger-slide-1.jpg","./images/hamburger-slide-2.jpg","./images/hamburger-slide-3.jpg"]
    return (
        <div className='page4 container'>

            {data.map((txt, index) => {
                if (index === selected) {
                    return (
                        <div className="page4-item">
                            <div className="page4-item-left">
                                <h4 className="title">DISCOVER</h4>
                                <h1>{txt}</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae alias fugit consectetur adipisicing elit. Recusandae adipisicing elit. Recusandae adipisicing elit. Recusandae error </p>
                            </div>
                            <div className="page4-item-right">
                                <img src={imgs[index]} alt="" />
                            </div>
                        </div>
                    )
                }
            })}

            <div className="dots">
                {[0, 1, 2].map(i => {
                    if (i == selected) {
                        return <div key={Math.random()} className="dot active"></div>

                    }
                    else {
                        return <div key={Math.random()} className="dot" onClick={() => setSelected(i)}></div>

                    }
                })}
            </div>
        </div>
    )
}

export default Page4
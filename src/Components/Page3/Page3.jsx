import React from 'react'
import './Page3.css'
import BurgerItem from './BurgerItem'
const Page3 = () => {
    return (
        <div className="page3 container">
            <div className="page3-header">
                <div className="btn">Always tasty burger</div>
            <h2>CHOOSE & ENJOY</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, natus saepe d, natus saepe adipisicing elit. Aliquid, natus saepe. Fuga quasi, eos </p>
                <p>excepturi beatae at, sint vitae atque commodi ipsum magni voluptatum modi incidunt delectus. Ad, suscipit veniam.</p>
            </div>

            <div className="page3-burger-wrapper">
                <BurgerItem img="./images/burger-1.png"/>
                <BurgerItem img="./images/burger-2.png"/>
                <BurgerItem img="./images/burger-3.png"/>
            </div>
        </div>
    )
}

export default Page3
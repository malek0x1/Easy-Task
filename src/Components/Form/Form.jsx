import React from 'react'
import './Form.css'
const Form = () => {
    return (
        <div className='form'>
            <form>
                <div className="form-wrapper">
                    <div className="subtitle">RESERVATION</div>
                    <div className="title">BOOK YOUR TABLE</div>
                    <div className="form-inputs">
                        <input type="text" required placeholder='Name' />
                        <input type="email" required placeholder='Email' />
                        <input type="text" required placeholder='date' />
                        <input type="text" required placeholder='Time' />
                        <input type="text" required placeholder='people' />
                        <button>Find a table</button>
                        <img src="./images/burger-bg.png" id="top-left" alt="" />
                        <img src="./images/bottle-bg.png" id="bottom-left" alt="" />
                        <img src="./images/plate-bg.png" id="bottom-right" alt="" />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form
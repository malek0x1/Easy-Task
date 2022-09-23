import React, { Component } from 'react'

export default class BurgerItem extends Component {
    render() {
        return (
            <div className="page3-burger-item">
                <img draggable={false} src={this.props.img} alt="" />
                <h1>Lorem Ipsum dolor</h1>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <div className="btn2">Order now</div>
            </div>
        )
    }
}

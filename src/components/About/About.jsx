import React, { Component } from 'react'
import './About.scss'
import Group from './group.png'

export default class About extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="menu">
                        <div className='menu-gui'></div>
                        <h2 className='menu-title'>About Us</h2>
                        <p className='main-text'>A Lorem Ipsum is simply dummy text of the printing <br></br>and typesetting industry.
                            Lorem Ipsum has been the <br /> industry's  standard dummy text ever since the 1500s, <br /> when an unknown <br /> <br /> printing and typesetting industry.
                            Lorem Ipsum has <br /> been the industry's  standard dummy text ever since <br /> the 1500s, when an unknown</p>
                        <a href=""><button className='main-btn'>Learn More</button></a>
                        <div className="group">
                            <img src={Group} alt="" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

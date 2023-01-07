import React, { Component } from 'react'
import './Main.scss'
import Preview from "../../images/preview.png"

export default class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <div className="main">
                        <div className="text">
                            <p className='title'>Build the Future with</p>
                            <p className='under-title'>Blockchain technology and Currency</p>
                        </div>
                        <div className="submit-button">
                            <a href=""><button className='btn-main'>Get Whitepaper</button></a>
                        </div>
                        <div className='preview'>
                            <img src={Preview} alt="" />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

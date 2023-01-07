import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className='container'>
                <header>
                    <div className="header">
                        <div className="btn">
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Services</a></li>
                                <li><a href="">How it works</a></li>
                                <li><a href="">Community</a></li>
                                <li><a href="https://google.com" target={'_blank'}><button className='airdrop-btn'>Airdrop</button></a></li>
                            </ul>
                        </div>
                        <div className="logo">
                            <h2>CyberGeeks</h2>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

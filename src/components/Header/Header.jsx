import React from 'react'
import './Header.scss'

function DropdownMenu() {
    return (
        <div className='container'>
            <header>
                <div className="header">
                    <div className="btn">
                        <ul>
                            <li><a href="">About us</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">How it works</a></li>
                            <div class="dropdown">
                                <li><a href="" className="dropbtn">Community</a></li>
                                <div class="dropdown-content">
                                    <a href="#">Telegram</a>
                                    <a href="#">Twitter</a>
                                </div>
                            </div>
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

export default DropdownMenu;

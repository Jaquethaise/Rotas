import React from 'react'
import { Link } from 'react-router-dom'

import '../../Header/Header.css'

export default function CityHeader() {
    return (
        <>
            <header className="menu2 hondaHeader">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/honda">Voltar</Link></li>
                        <li><Link to="/honda/city/pop">Pop</Link></li>
                        <li><Link to="/honda/city/biz">Biz</Link></li>
                        <li><Link to="/honda/city/cgfan">CG Fan</Link></li>
                        <li><Link to="/honda/city/cgtitan/">CG Titan</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
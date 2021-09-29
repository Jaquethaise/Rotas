import React from 'react'
import { Link } from 'react-router-dom'

import '../../Header/Header.css'

export default function CGTitanHeader() {
    return (
        <>
            <header className="menu2 hondaHeader">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/honda/cgtitan">Voltar</Link></li>
                        <li><Link to="/honda/city/cgtitan/painel">Painel</Link></li>
                        <li><Link to="/honda/city/cgtitan/tanque">Tanque</Link></li>
                        <li><Link to="/honda/city/cgtitan/carenagem">Carenagem</Link></li>
                        <li><Link to="/honda/city/cgtitan/rodas">Rodas</Link></li>
                        <li><Link to="/honda/city/cgtitan/freios">Freios</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
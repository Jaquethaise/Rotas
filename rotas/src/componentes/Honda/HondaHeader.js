import React from 'react'
import {Link} from 'react-router-dom'

import "../Header/Header.css"

export default function HondaHeader() {
    return(

        <header className='menu2 hondaHeader'>
            <nav className="navMenu2">
                <ul>
                    <li><Link to ="/">Voltar</Link></li>
                    <li><Link to ="/honda/city">City</Link></li>
                    <li><Link to ="/honda/trail">Trail</Link></li>
                    <li><Link to ="/honda/offroad">Off Road</Link></li>
                    <li><Link to ="/honda/sport">Sport</Link></li>
                    <li><Link to ="/honda/scooter">Scooter</Link></li>
                </ul>
            </nav>
        </header>
    )
}
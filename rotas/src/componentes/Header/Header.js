import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {

    function getPath () {
        setTimeout(function () {
            const pathName = window.location.pathname;
            
            if(pathName === "/harley") {
                document.querySelector("header").style.backgroundColor = "rgb(39 98 34)"
            } else if(pathName === "/suzuki") {
                document.querySelector("header").style.backgroundColor = "rgb(199 115 164)"
            } else if(pathName === "/yamaha") {
                document.querySelector("header").style.backgroundColor = "rgb(169 172 8)"
            } else if(pathName === "/lambreta") {
                document.querySelector("header").style.backgroundColor = "#ECE3E3"
            } else if(pathName === "/") {
                document.querySelector("header").style.backgroundColor = "#213A40"
            } 
            console.log(pathName);
        }, 500);
    }
    
    return(
        <header className='menu'>
            <nav className="navMenu">
                <ul>
                    <li><Link onClick={getPath} to ="/">Inicio</Link></li>
                    <li><Link onClick={getPath} to ="/harley">Harley</Link></li>
                    <li><Link onClick={getPath} to ="/suzuki">Suzuki</Link></li>
                    <li><Link onClick={getPath} to ="/honda">Honda</Link></li>
                    <li><Link onClick={getPath} to ="/yamaha">Yamaha</Link></li>
                    <li><Link onClick={getPath} to ="/lambreta">Lambreta</Link></li>
                </ul>
            </nav>
        </header>
    )
}
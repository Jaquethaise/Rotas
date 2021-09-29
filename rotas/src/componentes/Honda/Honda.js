import React from 'react'
import Titulo from '../Titulo/Titulo.js'
import HondaHeader from './HondaHeader.js'

import './Honda.css'

export default function Honda() {
    return(
        <>
            <HondaHeader />
               
            <Titulo texto="Honda" />
                
            <div className='honda'> 
                
            </div>
        </>
    )
}
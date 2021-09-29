import React from 'react'
import Titulo from '../../Titulo/Titulo'
import CGTitanHeader from '../CGTitan/CGTitanHeader'

import './CGTitan.css'

export default function CGTitan() {
    return (
        <>  
            <CGTitanHeader />

            <Titulo text="CG Titan" />

            <div className="cgtitan">
            
            </div>
        </>
    )
}
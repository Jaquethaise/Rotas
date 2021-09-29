import React from 'react'
import Titulo from '../../Titulo/Titulo'
import CityHeader from './CityHeader'

import './City.css'

export default function City() {
    return (
        <>  
            <CityHeader />

            <Titulo text="City" />

            <div className="city">
            
            </div>
        </>
    )
}
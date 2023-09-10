import React from 'react'
import './LodgeGrid.css'
import Lodge from './Lodge.jsx'

function LodgeGrid() {
  return (
    <div className='grid'>
        <Lodge/>
        <Lodge/>
        <Lodge/>
        <Lodge/>
        <Lodge/>
        <Lodge/>
    </div>
  )
}

export default LodgeGrid
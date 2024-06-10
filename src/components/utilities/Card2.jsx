import React from 'react'
import './Card2.css'

function Card2() {
  return (
<div className="card">
  <div className="card-details">
    <p className="text-title">Card title</p>
    <p className="text-body">Here are the details of the card</p>
  </div>
  <button className="card-button">More info</button>
</div>
  )
}

export default Card2
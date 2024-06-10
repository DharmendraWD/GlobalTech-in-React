import React from 'react'
import './Button3.css'


function Button3({label}) {
  return (
  <button className="button mt-[14px] mb-[6px]">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{label}</span>
    </span>
</button>
  )
}

export default Button3
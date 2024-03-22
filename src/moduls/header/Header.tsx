import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header>
      <div className="header__row">
        <div className="header__info">
          test app
          <a href="">by Pavel</a>
        </div>
        <p className="header__title">
          #Slider
        </p>
      </div>
    </header>
  )
}

export {Header}
import React from 'react'
import './Header.scss'

function Header() {
  return (
    <header>
      <div className="header__row">
        <div className="header__info">
          Test app
        </div>
        <p className="header__title">
          #Slider
        </p>
      </div>
    </header>
  )
}

export {Header}
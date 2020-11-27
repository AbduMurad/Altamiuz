import React from "react"
import "./menuIcon.css"

const MenuIcon = () => {

    const menuBtn = document.getElementById("menu-btn")
    const navOverlay = document.getElementById("navbar-overlay__items")
    const menuBtnToggle = () => {
        menuBtn.classList.toggle("change")
        navOverlay.classList.toggle("show-menu")
    }

    return (
        <button id="menu-btn" onClick={menuBtnToggle} onKeyDown={menuBtnToggle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>
    )
}


export default MenuIcon
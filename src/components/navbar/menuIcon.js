import React from "react"
import "./menuIcon.css"

const MenuIcon = () => {

    return (
        <button id="menu-btn" onClick={menuBtnToggle} onKeyDown={menuBtnToggle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>
    )
}

// Show and hide navbar menus

// Changing Navbar menu icon shape
export const menuBtnToggle = () => {
    // Navbar menu icon
    const menuBtn = document.getElementById("menu-btn")
    // Navbar overlay 
    const navOverlay = document.querySelector(".navbar-overlay")
    // Navbar menu list
    const navOverlayItems = document.getElementById("navbar-overlay__items")
    
    menuBtn.classList.toggle("change")

    // Show navbar menu overlay
    navOverlay.classList.toggle("on-top")
    navOverlayItems.classList.toggle("show-menu")
}

export const hideNavMenu = () => {
    // Navbar menu icon
    const menuBtn = document.getElementById("menu-btn")
    // Navbar overlay 
    const navOverlay = document.querySelector(".navbar-overlay")
    // Navbar menu list
    const navOverlayItems = document.getElementById("navbar-overlay__items")
    menuBtn.classList.remove("change")
    navOverlay.classList.remove("on-top")
    navOverlayItems.classList.remove("show-menu")
}



export default MenuIcon
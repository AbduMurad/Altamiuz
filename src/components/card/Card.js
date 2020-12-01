import React from "react"
import "./Card.css"

const Card = ({ Item }) => {
    return (
        <div className="card">
            <img src={Item.img.src} alt={Item.img.alt} className="card-image" />
            <h4 className="card-title">{Item.title}</h4>
            <p className="card-description">{Item.description}</p>
        </div>
    )
}

export default Card
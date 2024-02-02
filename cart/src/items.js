import React, { useState } from "react";
import below from './32213.png'
import uppie from "./32213 (1).png"

const Item = (props) => {

    const handleRemove = () => {
        props.removeItem(props.id)
    }

    const handleInc = () => {
        props.inc(props.id)
    }

    const handleDec = () => {
        props.dec(props.id)
    }

    return (
        <div className="unoItemo">
            <img src={props.image}></img>
            <div className="texts">
            <h3 className="name">{props.name}</h3>
            <div className="price">${props.price*props.num}</div>
            <button onClick={handleRemove} className="remove">remove</button>
            </div>
            <div className="nums">
                <button className="inc" onClick={handleInc}><img src={uppie} className="ini"></img></button>
                <div className="num">{props.num}</div>
                <button className="dec" onClick={handleDec}><img src={below} className="dini"></img></button>
            </div>
        </div>
    )
}

export default Item;
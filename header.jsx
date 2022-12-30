import React from 'react'
import logo from './images/Lambda - logo.png'

export default function Header() {
    return (
        <>
            <h3 className = "logo">
                <img className = "logoimg" src = {logo}/> 
                <span className = "text"> Lambda </span>
            </h3>
            <h1 className = "heading"> 
                <div className = "small"> The </div> 
                <div className = "large"> Commons</div>
            </h1>
        </>
    )
}
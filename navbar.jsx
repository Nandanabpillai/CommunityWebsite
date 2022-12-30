import React from 'react'

export default function NavBar() {
    return (
        <div className = "nav-bar">
            <div class = "element">
                <div className = 'a'> Career Advice </div>
                <div className = 'a'> Lambda Community </div>
                <div className = 'a'> In the News </div>
                <div className = 'a'> From Our Founder </div>
                <div className = 'a'> Engineering </div>
                <div className = 'a'> Hiring Experts </div>
            </div>
            <div classNeme = 'icons'>
                <box-icon type = 'logo' name='twitter' color = 'red' size = '20px'></box-icon>
                <box-icon type = 'logo' name='facebook' color = 'red' size = '20px'></box-icon> 
                <box-icon type = 'logo' name = 'instagram' color = 'red' size = '20px'></box-icon> 
            </div>
        </div>      
    )
}
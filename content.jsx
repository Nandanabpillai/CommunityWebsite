import React from 'react'

export default function Content(props) {
    return (
        <>
            <div className = "announcement"> 
                <div className = "title"> {props.title} </div>
                <div> <img src = {props.image}/> </div>
                <div className = "desc"> {props.desc} </div>
            </div>
        </>
    )
}
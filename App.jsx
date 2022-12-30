import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './navbar'
import Content from './content'
import admission from './images/admission.png'
import announcement from './images/announcement.png'
import announcement2 from './images/announcement2.png'
import Header from './header'
import './App.css'

function App() {
    return (
        <div className='box'>
            <Header />
            <br/>
            <hr/>
            <NavBar />
            <hr/>
            <h3 className = 'latest'> Latest </h3>
            <div className = "container">
                <Content
                    title = "Announcements"
                    image = {announcement}
                    desc = "Building an Inclusive Future: 2020 Diversity at Lambda School"
                />
                <Content
                    title = "Admissions"
                    image = {admission}
                    desc = "Checklist: 5 Things to do Before Your First Day of Lambda School"
                />
                <Content
                    title = "Announcements"
                    image = {announcement2}
                    desc = "An Update on Lambda School and ISAs in California"
                />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
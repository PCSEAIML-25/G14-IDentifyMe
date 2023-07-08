import React from 'react'
import "./Home.css"
import Contact from './Contact'
import Header from './Header'
import Navbar from './Navbar'
// import Index from './Index'
export default function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div>
            <Header/>
        </div>
        {/* <div>
          <Index/>
        </div> */}
        <div style={{margin:"12rem"}}>
          <Contact/>
        </div>



    </div>
  )
}

import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Hello
() {
  return (
    <div style={{backgroundColor:"rgba(40, 58, 90, 0.9)",height:"5.5rem",color:"white"}}>
    <nav className="navbar navbar-expand-lg bg-body-dark text-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        
        
      </ul>
      <div className="d-flex" role="search">
        <Link className="" style={{ textDecoration:"none",color:"white" ,marginRight:"1.5rem " ,marginTop:"1.5rem" ,cursor:"pointer"}} to='/login'>SignIN</Link>
        <Link className="Signup" style={{border:"2px solid green",borderRadius:"5px",padding:".3rem .3rem .3rem .5rem",textDecoration:"none",color:"white" ,marginRight:"1.5rem " ,marginTop:"1.2rem" ,cursor:"pointer"}} to="/signup">SignUp</Link>
      </div>
    </div>
  </div>
</nav>
</div>
    
  )
}

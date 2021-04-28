import React from 'react'

 function NavBarSirnin() {
    return (
        <nav className="primary navbar navbar-expand-lg navbar-light bg-dark" >
  <div className=" primary container-fluid">
    <Link className="navbar-Light" to= '/home'>Home</Link>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/users">User</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}


export default NavBarSirnin
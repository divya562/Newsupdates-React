// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
//   static propTypes = {}

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" to="/">NewsUpdate</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="/">Home</a>
                  </li>
                  <li className="nav-item"><a className="nav-link" to="/about">About</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">Business</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">Entertainment</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">General</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">Health</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">Science</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">Sports</a></li>
                  <li className="nav-item"><a className="nav-link" to="/about">Technology</a></li>
                </ul>
                
                {/* <div className="form-check form-switch text-light ">
                  <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                </div> */}
              </div>
            </div>
          </nav>
    )
  }
}

export default Navbar
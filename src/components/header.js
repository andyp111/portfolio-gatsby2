import React from "react"
import useDarkMode from "use-dark-mode";

import SwitchIcons from '../components/switchicons.js';



const Header = () => {
  const darkMode = useDarkMode(false);
  const handleTheme = (theme) => {
    theme === 'dark' ? darkMode.enable() : darkMode.disable();
  }
  return (
    <header className="nav-header"
      style={{

        marginBottom: "1rem",
      }}
    >
      <div className="nav-outer-div"
        style={{

          marginBottom: "1rem",
          boxShadow: "0 5px 2px -2px rgba(0,0,0,.2)"
        }}
      >
        <div className="nav-outer-div"
          style={{
            margin: "0 auto",
            maxWidth: "100%",
            padding: "1.45rem 1.0875rem",
            display: "flex",
            // justifyItems: "center",
            // alignItems: "center",
            justifyContent: 'center',
            // textAlign: "center"

          }}
        >
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li>
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li>
                  <a className="nav-link" href="/projects">Projects</a>
                </li>
                <li>
                  <a className="nav-link" href="/resume">Resume</a>
                </li>
                <li>
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
                <li className="nav-dark-light" style={{padding: '5px'}}><SwitchIcons onClick={handleTheme} /></li>
              </ul>

            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}


export default Header


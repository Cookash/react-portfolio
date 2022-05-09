import React from "react"
import { Link } from "react-scroll/modules"

import "../styles/Navbar.css"

export default function Navbar() {
    return(
        <nav className="navbar">
        <label className="navbar-brand mb-0 h3"><span className="code">{'<'}</span>goletzlukasz.dev<span className="code">{'/ >'}</span></label>
        <ul className="navbar-nav">
        <li className="nav-item">
        <Link activeClass="active" to="intro" spy={true} smooth={true} duration={500}>
          Intro
        </Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500}>
          Projects
        </Link>
        </li>
        <li className="nav-item">
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
        </li>
      </ul>
        </nav>
    )
}
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import companyLogo from '../../assets/svg/logo.svg'

export default function Navbar() {

  const navWrapper = useRef();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      navWrapper.current.classList.toggle('active', window.scrollY > 0)
    })
  }, [])

  return (
    <div ref={navWrapper} className="mainNavWrapper">
      <nav className="navbar navbar-expand-lg navbar-dark py-0 mb-4 mainNav">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={companyLogo} alt="company logo" width="auto" height="100px" className="d-inline-block align-text-top" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-auto d-flex align-items-start" >
              <li className="nav-item mx-2">
                <NavLink exact to="/" className="nav-link px-2">Home</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/technologies" className="nav-link px-2">Technologie</NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink to="/projects" className="nav-link px-2">Projekty</NavLink>
              </li>
              <li className="nav-item mx-2" >
                <NavLink to="/contact" className="nav-link link-contact-container px-2">Kontakt</NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  )
}
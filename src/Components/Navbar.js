import React from 'react';
import PropTypes from 'prop-types'


function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">{props.menuOneTitle} <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.menuTwoTitle}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.menuThreeTitle}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.menuFourTitle}</a>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;


// Set PropTypes in navbar as a string
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    menuOneTitle: PropTypes.string.isRequired,
    menuTwoTitle: PropTypes.string.isRequired,
    menuThreeTitle: PropTypes.string.isRequired,
    menuFourTitle: PropTypes.string.isRequired
}

// Set Default props in Navbar
Navbar.defaultProps = {
    title: "Enter Title",
    menuOneTitle: "Enter Menu1",
    menuTwoTitle: "Enter Menu2",
    menuThreeTitle: "Enter Menu3",
    menuFourTitle: "Enter Menu4"
}
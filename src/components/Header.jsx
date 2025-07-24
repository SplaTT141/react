import { NavLink } from "react-router";
import logo from '../assets/react.svg'

export function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <NavLink className="d-inline-flex link-body-emphasis" to='/'>
                        <img src={logo} alt="React logo" />
                    </NavLink>
                </div>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav-pills">
                    <li><NavLink className="nav-link px-2" to='/'>Home</NavLink></li>
                    <li><NavLink className="nav-link px-2" to='/about'>About</NavLink></li>
                    <li><NavLink className="nav-link px-2" to='/services'>Services</NavLink></li>
                </ul>
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 nav-pills">
                    <li><NavLink className={"nav-link px-2"} to='/login'>Login</NavLink></li>
                    <li><NavLink className={"nav-link px-2"} to='/register'>Register</NavLink></li>
                </ul>
            </header>
        </div>
    );
}
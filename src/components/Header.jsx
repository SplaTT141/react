import { NavLink } from "react-router";
import logo from '../assets/react.svg'
import { menuData } from "../data/menuData";

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
                    {
                        menuData.map(item => (
                        <li key={item.href}><NavLink className="nav-link px-2" to={item.href}>{item.text}</NavLink></li>
                        ))
                    }
                </ul>
            </header>
        </div>
    );
}
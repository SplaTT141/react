import { Link } from "react-router";
import { menuData } from "../data/menuData";

export function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">© 2025 Company, Inc</p>
                <ul className="nav col-md-4 justify-content-end">
                    {
                        menuData.map(item => (
                        <li key={item.href}><Link className="nav px-2 text-decoration-none" to={item.href}>{item.text}</Link></li>
                        ))
                    }
                </ul>
            </footer>
        </div>
    );
}
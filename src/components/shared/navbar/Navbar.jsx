import { NavLink } from "react-router-dom";
import { ChevronDownIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Logo from "../logo/logo";
import "./navbar.css";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a href="#" className="navbar-brand ml-5"><Logo /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <Bars3Icon className="btn-icon"/> 
            </button>
            <div className="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                <ul className="navbar-nav mt-1 mr-auto">
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle">Productos <ChevronDownIcon className="dropdown-icon" /> </a>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" activeClassName="active">Nosotros</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle">Precios <ChevronDownIcon className="dropdown-icon" /></a>
                    </li>
                    <li className="nav-item">
                        <  br />
                    </li>
                    <li className="nav-item">
                        <div className="form-inline">
                            <button className="btn btn-rounded btn-primary btn-c-size">Acceder <UserCircleIcon className="btn-icon"/></button>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>
    )
}
import { NavLink } from "react-router-dom";
import { FaMountain, FaHome, FaCar } from "react-icons/fa";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="main-header">
      <nav className="nav-menu">

        <NavLink
          to="/destinasi"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaMountain className="nav-icon" />
          <span>Destinasi</span>
        </NavLink>

        <NavLink
          to="/villa"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaHome className="nav-icon" />
          <span>Villa</span>
        </NavLink>

        <NavLink
          to="/jeep"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <FaCar className="nav-icon" />
          <span>Jeep</span>
        </NavLink>

      </nav>
    </header>
  );
}

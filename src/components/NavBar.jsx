import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/directors" end>
        Directors
      </NavLink>
      <NavLink to="/directors/new">
        Add Director
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;

import { NavLink } from "react-router-dom";
import "./PageNav.css";

function PageNav() {
  return (
    <nav className="nav">
      <h2>Kunjusss</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

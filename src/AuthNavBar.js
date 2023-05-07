import { Link } from "react-router-dom";
import Logo from "./Images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1>Trip Tracker</h1> */}
      <img src={Logo} alt="" />
      <div className="links">
        <Link to="/authhome">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;

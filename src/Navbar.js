import { Link } from "react-router-dom";
import Logo from './Images/Logo.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* <h1>Trip Tracker</h1> */}
            <img src={Logo} alt="" />
            <div className="links">
                <Link to="/">Home</Link>
                <a href="#About">About</a>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

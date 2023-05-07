import Logo from './Images/Logo.png'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* <h1>Trip Tracker</h1> */}
            <img src={Logo} alt="" />
            <div className="links">
                <a href="#pagetop">Home</a>
                <a href="#About">About</a>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
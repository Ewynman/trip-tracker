const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1><a href="/">Trip Tracker</a></h1>
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
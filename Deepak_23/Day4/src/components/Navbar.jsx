import {NavLink} from "react-router-dom";
function Navbar(){
    return(<>
    <nav className="navbar">
     <h2 className="logo">ReactApp</h2>
     <div className="links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
        <NavLink to="/contact"className="link">Contact</NavLink>
     </div>

    </nav>
    
    </>)
}
export default Navbar;
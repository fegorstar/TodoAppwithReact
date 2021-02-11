import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/"> <h1>The Todo App</h1></Link>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
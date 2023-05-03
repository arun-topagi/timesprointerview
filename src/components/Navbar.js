import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{backgroundColor:'ThreeDFace'}}>
      <nav style={{}}>
        <ul style={{listStyle:'none'}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usePage">User Page</Link>
          </li>
          <li>
            <Link to="/adminPage">Admin Page</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Navbar;
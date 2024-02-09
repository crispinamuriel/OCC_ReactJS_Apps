import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="header">
      <nav className="navbar">
        <img
          src="https://i.postimg.cc/0NNqk55q/345-C0248-AB01-4-F1-B-B66-F-434-CEE7077-AD.png"
          alt=""
        />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/properties">Properties</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

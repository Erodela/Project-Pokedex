import { Link } from "react-router-dom";
import "./Header.css";
export default function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <div>Home Page</div>
      </Link>
      <Link to="/Search">
        <div>Pokemon Search</div>
      </Link>
      <Link to="/Types">
        <div>Types</div>
      </Link>
      <Link to="/Wishlist">
        <div>Wishlist</div>
      </Link>
      <Link to="/About">
        <div>About</div>
      </Link>
    </div>
  );
}

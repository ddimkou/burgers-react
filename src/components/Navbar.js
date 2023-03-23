import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftside">
        <img src={Logo} alt="burger-logo" />
      </div>
      <div className="rightside">
        <Link to="https://ddimkou.github.io/burgers-react/">Home</Link>
        <Link to="https://ddimkou.github.io/burgers-react/about">About</Link>
        <Link to="https://ddimkou.github.io/burgers-react/menu">Menu</Link>
        <Link to="https://ddimkou.github.io/burgers-react/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import Logo from '../../assets/Logo.png';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar-header">
      <nav className="container">
        <img src={Logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#community">Community</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li>
            <a className="btn-register">Register Now <HiOutlineArrowNarrowRight/></a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
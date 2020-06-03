import React from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import "./header.css";

class Header extends React.Component {
  state = {
    links: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "About",
        path: "/about",
      },
      {
        title: "Contact",
        path: "/contact",
      },
      {
        title: "Events",
        path: "/",
      },
      {
        title: "Blogs",
        path: "/",
      },
      {
        title: "Team",
        path: "/",
      },
    ],
  };

  render() {
    const { links } = this.state;
    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-light  py-3'>
          <div className='navbar-brand'>
            <img
              src={logo}
              alt='logo'
              style={{ width: "55px", marginLeft: "10px" }}
            />
          </div>
          <ul className='nav justify-content-end text-white m-auto'>
            {links.map((item, index) => (
              <li key={index} className='nav-item'>
                <Link to={item.path} className='nav-link'>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='nav' style={{ float: "right" }}>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Signup
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;

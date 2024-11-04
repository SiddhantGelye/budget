import { useState } from "react";
import "../scss/navbar.scss";

import { TbPigMoney } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <header className="header_container">
      <Link to="/" className="home_button">
        <div className="logo">
          <TbPigMoney className="logo_icon" />
        </div>
      </Link>
      <div className="login_logout_buttons">
        {isLoggedIn ? (
          <Link to="/login">
            <button className="login_button">Logout</button>
          </Link>
        ) : (
          <button className="logout_button">Login</button>
        )}
      </div>
    </header>
  );
}

import { useState } from "react";

// Use fragment <></> to conditionally display login / dashboard + signout
export default function Navbar() {
  const [isAuthUser, setisAuthUser] = useState(false)
  const handleClick = () => {
    setisAuthUser(!isAuthUser)
  }
  return (
    <header className="navbar-wrapper">
      {isAuthUser ?
        <nav className="navbar">
          <Logo />
          <div className="navbar-links">
            <a href="#" className="navbar-link">
              Dashboard
            </a>
            <a href="#" className="navbar-link" onClick={handleClick}>
              Sign out
            </a>
          </div>
        </nav> :
        <nav className="navbar">
          <Logo />
          <div className="navbar-links">
            <a href="#" className="navbar-link" onClick={handleClick}>
              Login
            </a>
          </div>
        </nav>
      }

    </header>
  );
}

function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt=""
        />
      </a>
    </div>
  );
}

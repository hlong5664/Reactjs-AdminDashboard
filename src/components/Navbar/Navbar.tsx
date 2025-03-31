import { useState } from "react";
import "./navbar.scss";
import { MenuMobile } from "../Menu/MenuMobile";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="menu" onClick={() => setOpen(true)}>
          <img src="menu.svg" alt="" />
        </div>
        {open && <MenuMobile setOpen={setOpen} />}

        <div className="logo">
          <img src="logo.svg" alt="" />
          <Link to={"/"}>
            <span>ReactAdmin</span>
          </Link>
        </div>
        <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>1</span>
          </div>
          <div className="user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXIrqiW3R5OstWAjkuFvNwvjYHRaTmwEQWg&s"
              alt=""
            />
            <span>Admin</span>
          </div>
          <img src="/setting.svg" alt="" className="icon" />
        </div>
      </div>
    </>
  );
};

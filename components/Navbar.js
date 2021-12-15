/* eslint-disable @next/next/link-passhref */
import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/shared/desktop/logo.svg";
import navStyles from "../styles/Navbar.module.css";
import { ActiveInviteContext } from "../contexts/invite.context";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { setOpenInvite } = useContext(ActiveInviteContext);

  const toggleNav = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    setOpen(false);
    setOpenInvite();
  };

  return (
    <div className={navStyles.nav}>
      <Link href="/">
        <a>
          <Image
            className={navStyles.logo}
            src={logo}
            alt="logo"
            width={170}
            height={16}
          />
        </a>
      </Link>
      <nav className={`${navStyles.navLinks} ${open && navStyles.active}`}>
        <Link href="/stories">
          <h4 className={navStyles.links} onClick={() => setOpen(false)}>
            Stories
          </h4>
        </Link>
        <Link href="/features">
          <h4 className={navStyles.links} onClick={() => setOpen(false)}>
            Features
          </h4>
        </Link>
        <Link href="/pricing">
          <h4 className={navStyles.links} onClick={() => setOpen(false)}>
            Pricing
          </h4>
        </Link>
        <div className={navStyles.blackLine}></div>
        <button
          className={`${navStyles.btn} ${navStyles.menu}`}
          onClick={() => handleClick()}
        >
          Get an invite
        </button>
      </nav>
      <button
        className={`${navStyles.btn} ${navStyles.btnNav}`}
        onClick={() => setOpenInvite()}
      >
        Get an invite
      </button>
      <div
        className={`${navStyles.burger} ${open && navStyles.active}`}
        onClick={toggleNav}
      >
        <div className={navStyles.lines}></div>
        <div className={navStyles.lines}></div>
      </div>
    </div>
  );
}

export default Navbar;

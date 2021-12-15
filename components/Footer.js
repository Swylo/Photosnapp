/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/shared/desktop/logo-footer.svg";
import facebook from "../public/assets/shared/desktop/facebook.svg";
import youtube from "../public/assets/shared/desktop/youtube.svg";
import twitter from "../public/assets/shared/desktop/twitter.svg";
import pinterest from "../public/assets/shared/desktop/pinterest.svg";
import instagram from "../public/assets/shared/desktop/instagram.svg";
import { useContext } from "react";
import { ActiveInviteContext } from "../contexts/invite.context";

function Footer() {
  const { setOpenInvite } = useContext(ActiveInviteContext);
  const socials = [
    {
      img: facebook,
      name: "facebook",
    },
    {
      img: youtube,
      name: "youtube",
    },
    {
      img: twitter,
      name: "twitter",
    },
    {
      img: pinterest,
      name: "pinterest",
    },
    {
      img: instagram,
      name: "instagram",
    },
  ];
  return (
    <footer>
      <div className="logo-socials">
        <div className="logo">
          <Link href="/">
            <a>
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        <div className="social-links">
          {socials.map((link) => (
            <Link href={`https://www.${link.name}.com`} key={link.name}>
              <a className="social-link">
                <Image src={link.img} alt={link.name} />
              </a>
            </Link>
          ))}
        </div>
      </div>
      <ul className="nav-link">
        <li className="nav">
          <Link href="/">
            <h4>Home</h4>
          </Link>
        </li>
        <li className="nav">
          <Link href="/stories">
            <h4>Stories</h4>
          </Link>
        </li>
        <li className="nav">
          <Link href="/features">
            <h4>Features</h4>
          </Link>
        </li>
        <li className="nav">
          <Link href="/pricing">
            <h4>Pricing</h4>
          </Link>
        </li>
      </ul>
      <div className="invite">
        <div className="invite-content">
          <div className="invite-link" onClick={() => setOpenInvite()}>
            <h4>Get an invite</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
        <p className="copyright">Copyright 2019. All Rights Reserved</p>
      </div>
      <style jsx>
        {`
          footer {
            padding: 64px 165px;
            background-color: black;
            color: white;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            z-index: 5;
            position: relative;
          }
          .logo-socials {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .social-link {
            margin-right: 13.5px;
            filter: saturate(0) brightness(2.5);
            transition: 0.15s ease-in;
          }
          .social-link:last-of-type {
            margin-right: 0;
          }
          .social-link:hover {
            filter: saturate(1) brightness(1);
          }
          .nav-link {
            margin: 0;
            padding: 0;
          }
          .nav-link .nav {
            margin-bottom: 20px;
            list-style: none;
          }
          .nav-link h4 {
            margin: 0;
            cursor: pointer;
            opacity: 1;
            display: inline;
            transition: 0.15s ease-in-out;
          }
          .nav-link .nav:last-of-type {
            margin: 0;
          }
          .nav-link h4:hover {
            opacity: 0.3;
          }
          .invite {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .invite-link {
            cursor: pointer;
          }
          .invite-link h4 {
            margin: auto 16px auto 0;
            transform: translateY(-3px);
            display: inline-block;
            border-bottom: 1px solid rgba(255, 255, 255, 0);
            transition: 0.15s ease-in-out;
            line-height: 12px;
          }
          .invite-link:hover h4 {
            border-bottom: 1px solid rgba(255, 255, 255, 1);
          }
          .invite-link svg {
            margin: auto 0 auto;
          }
          .invite-content {
            margin-left: auto;
          }
          .copyright {
            margin: 0;
            margin-left: auto;
            opacity: 0.5;
          }

          @media (max-width: 855px) {
            footer {
              padding: 64px 40px;
              grid-template-columns: 1.5fr 1fr 2fr;
            }
          }

          @media (max-width: 495px) {
            footer {
              padding: 56px 32px;
              grid-template-columns: 1fr;
            }

            .social-links {
              margin: 32px 0 50px;
            }

            .logo-socials {
              align-items: center;
            }

            .nav-link {
              text-align: center;
            }

            .invite {
              align-items: center;
              margin-top: 120px;
            }

            .invite-content {
              margin-left: initial;
            }

            .copyright {
              margin-left: initial;
              margin-top: 34px;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;

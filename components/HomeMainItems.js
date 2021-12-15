import Link from "next/link";
import { ActiveInviteContext } from "../contexts/invite.context";
import { useContext } from "react";

function HomeMainItems(props) {
  const { setOpenInvite } = useContext(ActiveInviteContext);
  const { title, description, btn, isMain, isReversed, images } = props;

  return (
    <section className="main">
      <div className="text-element">
        {isMain && <div className="rainbow"></div>}
        <div className="container">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          {isMain ? (
            <div className="link" onClick={() => setOpenInvite()}>
              <h4>{btn}</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#000">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </div>
          ) : (
            <Link href={isMain ? "/" : "/stories"}>
              <a className="link">
                <h4>{btn}</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                  <g fill="none" fillRule="evenodd" stroke="#000">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                  </g>
                </svg>
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className="desktop image"></div>
      <div className="tablet image"></div>
      <div className="mobile image"></div>

      <style jsx>
        {`
          .text-element {
            background-color: ${isMain ? "black" : "white"};
            color: ${isMain ? "white" : "black"};
            padding: 173px 112px;
            order: ${isReversed ? "2" : "0"};
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }

          .image {
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          .desktop {
            background-image: url("${images.desktop.src}");
          }

          .tablet {
            background-image: url("${images.tablet.src}");
            display: none;
          }

          .mobile {
            background-image: url("${images.mobile.src}");
            display: none;
          }

          .rainbow {
            position: absolute;
            width: 6px;
            height: 47%;
            left: 0;
            background: linear-gradient(to top, #ffc593, #bc7198, #5a77ff);
          }

          .container {
            max-width: 390px;
            max-height: 350px;
          }

          .main {
            display: grid;
            grid-template-columns: ${isReversed
              ? "57.6% 42.4%"
              : "42.4% 57.6%"};
          }

          .description {
            margin: 21px 0 48px;
          }

          .title {
            margin: 0px;
          }

          .link {
            cursor: pointer;
            display: inline-flex;
          }

          .link h4 {
            border-bottom: 1px solid
              rgba(${isMain ? "255, 255, 255" : "0, 0, 0"}, 0);
            transition: 0.15s ease-in-out;
          }

          .link:hover h4 {
            border-bottom: 1px solid
              rgba(${isMain ? "255, 255, 255" : "0, 0, 0"}, 1);
          }

          svg {
            margin: auto 0 auto 26px;
          }
          svg g {
            stroke: ${isMain ? "#fff" : "#000"};
          }

          @media (max-width: 1200px) {
            .text-element {
              padding: 110px 65px;
            }
          }

          @media (max-width: 940px) {
            .main {
              grid-template-columns: ${isReversed
                ? "35.5% 64.5%"
                : "64.5% 35.5%"};
            }
            .text-element {
              padding: 173px 54px;
            }
            .desktop {
              display: none;
            }
            .tablet {
              display: initial;
            }
          }

          @media (max-width: 490px) {
            .main {
              grid-template-columns: 1fr;
            }
            .text-element {
              padding: 72px 24px;
              order: 2;
            }
            .tablet {
              display: none;
            }
            .mobile {
              display: initial;
              height: ${isMain ? "294" : "271"}px;
            }
            .description {
              margin: 16px 0 23px;
            }
            .rainbow {
              position: absolute;
              width: 126px;
              height: 6px;
              left: 33px;
              top: 0;
              background: linear-gradient(to right, #ffc593, #bc7198, #5a77ff);
            }
          }
        `}
      </style>
    </section>
  );
}

export default HomeMainItems;

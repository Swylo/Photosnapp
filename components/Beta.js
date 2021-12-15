/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import bgBetaDesktop from "../public/assets/shared/desktop/bg-beta.jpg";
import bgBetaTablet from "../public/assets/shared/tablet/bg-beta.jpg";
import bgBetaMobile from "../public/assets/shared/mobile/bg-beta.jpg";
import { ActiveInviteContext } from "../contexts/invite.context";
import { useContext } from "react";

function Beta() {
  const { setOpenInvite } = useContext(ActiveInviteContext);
  return (
    <section className="container">
      <div className="content">
        <h1>We're in Beta. Get your invite today!</h1>
        <div className="invite">
          <div className="invite-link" onClick={() => setOpenInvite()}>
            <h4>Get an invite</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="rainbow"></div>
      <style jsx>
        {`
          .container {
            position: relative;
            background-image: url("${bgBetaDesktop.src}");
            background-size: cover;
            background-position: center;
            height: 280px;
          }
          .content {
            color: white;
            padding: 65px 168px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .content h1 {
            max-width: 400px;
            margin: 0;
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
          .rainbow {
            position: absolute;
            width: 6px;
            height: 100%;
            left: 0;
            bottom: 0;
            background: linear-gradient(to top, #ffc593, #bc7198, #5a77ff);
          }

          @media (max-width: 950px) {
            .content {
              padding: 65px 132px;
            }
          }

          @media (max-width: 855px) {
            .container {
              background-image: url("${bgBetaTablet.src}");
            }
            .content {
              padding: 68px 40px;
            }
          }

          @media (max-width: 490px) {
            .container {
              height: 288px;
              background-image: url("${bgBetaMobile.src}");
            }
            .content {
              padding: 64px 32px;
              flex-direction: column;
              align-items: flex-start;
            }
            .content h1 {
              max-width: 400px;
              margin-bottom: 24px;
            }
            .rainbow {
              width: 128px;
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

export default Beta;

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import moonDesktop from "../public/assets/stories/desktop/moon-of-appalacia.jpg";
import moonTablet from "../public/assets/stories/tablet/moon-of-appalacia.jpg";

function StoriesHeader() {
  return (
    <header>
      <div className="desktop">
        <Image src={moonDesktop} layout="responsive" alt="full moon" />
      </div>
      <div className="tablet">
        <Image src={moonTablet} layout="responsive" alt="full moon" />
      </div>
      <div className="container">
        <div className="content">
          <h4>Last month's featured story</h4>
          <h1 className="title">Hazy full moon of Appalachia </h1>
          <p className="infos">
            <span className="date">March 2nd 2020 </span>
            <span className="author">by John Appleseed</span>
          </p>
          <p className="description">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <Link href="/stories">
            <a className="link">
              <h4>Read The Story</h4>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          header {
            position: relative;
          }
          .container {
            position: absolute;
            height: 100%;
            padding: 8.5%;
            top: 0;
            color: white;
          }
          .content {
            max-width: 400px;
          }
          h4 {
            margin: 0;
          }
          .title {
            margin: 24px 0 16px;
          }
          .infos {
            font-size: 13px;
            line-height: 14px;
            margin: 0;
          }
          .date {
            opacity: 0.75;
            margin-right: 9px;
          }
          .description {
            opacity: 0.6;
            margin: 24px 0;
          }
          .link {
            display: flex;
            justify-content: space-between;
            width: 185px;
          }
          .link h4 {
            border-bottom: 1px solid rgba(255, 255, 255, 0);
            transition: 0.15s ease-in;
          }
          .link:hover h4 {
            border-bottom: 1px solid rgba(255, 255, 255, 1);
          }
          .tablet {
            display: none;
          }

          @media (max-width: 1025px) {
            .container {
              padding: 4.5%;
            }
          }

          @media (max-width: 855px) {
            .tablet {
              display: initial;
            }
            .desktop {
              display: none;
            }
            .container {
              padding: 16% 39px;
            }
          }

          @media (max-width: 600px) {
            .container {
              padding: 9% 28px;
            }
          }

          @media (max-width: 495px) {
            .container {
              position: initial;
              padding: 48px 28px;
              background-color: black;
            }
          }
        `}
      </style>
    </header>
  );
}

export default StoriesHeader;

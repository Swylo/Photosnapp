import Image from "next/image";
import Link from "next/link";

function StoriesGalleryImage(props) {
  const { img, title, author, date } = props;
  return (
    <div className="container">
      <Image src={img} layout="responsive" alt={title} />
      <div className="infos">
        <p className="date">{date}</p>
        <h3 className="title">{title}</h3>
        <p className="author">by {author}</p>
        <div className="divider"></div>
        <Link href="/stories">
          <a className="link">
            <h4>Read Story</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </a>
        </Link>
      </div>
      <div className="rainbow"></div>
      <style jsx>
        {`
          .container {
            position: relative;
            display: inline-block;
            cursor: pointer;
            transform: translateY(0);
            transition: 0.2s ease-in-out;
          }

          .container::after {
            content: "";
            width: 100%;
            height: 60%;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 1) 10px,
              rgba(255, 255, 255, 0)
            );
            bottom: 0;
            left: 0;
            position: absolute;
            opacity: 0.95;
            z-index: 1;
          }

          .container:hover {
            transform: translateY(-20px);
          }

          .infos {
            position: absolute;
            bottom: 4px;
            width: 100%;
            padding: 40px;
            color: #fff;
            z-index: 2;
          }

          .divider {
            height: 1px;
            width: 100%;
            background-color: #979797;
            opacity: 0.25;
            margin-bottom: 20px;
          }

          .title,
          h4 {
            margin: 0;
          }

          .author {
            font-size: 13px;
            line-height: 13px;
            margin: 4px 0 16px;
          }
          .date {
            font-size: 13px;
            line-height: 13px;
            margin: 0 0 4px;
          }

          .link {
            display: flex;
            justify-content: space-between;
          }

          .rainbow {
            position: absolute;
            width: 100%;
            height: 5px;
            background: linear-gradient(
              to right,
              #ffc593 0%,
              #bc7198 15%,
              #bc7198 70%,
              #5a77ff 100%
            );
            z-index: -5;
          }
        `}
      </style>
    </div>
  );
}

export default StoriesGalleryImage;

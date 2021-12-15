import Image from "next/image";
import heroDesktop from "../public/assets/pricing/desktop/hero.jpg";
import heroTablet from "../public/assets/pricing/tablet/hero.jpg";
import heroMobile from "../public/assets/pricing/mobile/hero.jpg";

function PricingHeader() {
  return (
    <header className="container">
      <div className="description">
        <h1 className="title">Pricing</h1>
        <p>
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
        <div className="rainbow"></div>
      </div>
      <div className="image"></div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 42.4% 57.6%;
          }
          .image {
            background-image: url("${heroDesktop.src}");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
          .description {
            background-color: black;
            color: white;
            position: relative;
            padding: 28% 18%;
          }
          .description p {
            opacity: 0.6;
            margin: 0;
          }
          .description .title {
            margin: 0 0 21px;
          }
          .rainbow {
            position: absolute;
            width: 6px;
            height: 35%;
            left: 0;
            bottom: 20%;
            transform: translateY(-25%);
            background: linear-gradient(to top, #ffc593, #bc7198, #5a77ff);
          }
          @media (max-width: 855px) {
            .container {
              grid-template-columns: 64.5% 35.5%;
            }
            .description {
              padding: 36% 11%;
            }
            .image {
              background-image: url("${heroTablet.src}");
            }
          }
          @media (max-width: 490px) {
            .container {
              grid-template-columns: 1fr;
            }
            .description {
              padding: 21% 8%;
              order: 2;
            }
            .image {
              height: 294px;
              background-image: url("${heroMobile.src}");
            }
            .rainbow {
              width: 128px;
              height: 6px;
              left: 33px;
              top: 0;
              transform: translateY(0);
              background: linear-gradient(to right, #ffc593, #bc7198, #5a77ff);
            }
          }
        `}
      </style>
    </header>
  );
}

export default PricingHeader;

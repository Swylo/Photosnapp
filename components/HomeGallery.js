import HomeGalleryImage from "./HomeGalleryImage";
import { homeGalleryElements } from "../libs/homeElements";

function HomeGallery() {
  return (
    <section className="container">
      {homeGalleryElements.map((element) => (
        <HomeGalleryImage
          title={element.title}
          author={element.author}
          img={element.img.desktop}
          key={element.title}
        />
      ))}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            z-index: -1;
          }

          @media (max-width: 855px) {
            .container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 495px) {
            .container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </section>
  );
}

export default HomeGallery;

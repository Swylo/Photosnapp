import StoriesGalleryImages from "./StoriesGalleryImages";
import storiesElements from "../libs/storiesElements";

function StoriessGallery() {
  return (
    <section className="container">
      {storiesElements.map((element) => (
        <StoriesGalleryImages
          date={element.date}
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

export default StoriessGallery;

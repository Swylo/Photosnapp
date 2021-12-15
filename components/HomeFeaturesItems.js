import Image from "next/image";

function HomeFeaturesItems(props) {
  const { title, text, image } = props;
  return (
    <div className="container">
      <div className="image">
        <Image src={image} layout="responsive" alt="feature" />
      </div>
      <div className="description">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }
          .title {
            margin: 48px 0 16px;
          }
          .text {
            margin: 0;
            opacity: 0.6;
          }
          .description {
            text-align: center;
          }
          .image {
            width: 40%;
          }

          @media (max-width: 855px) {
            .image {
              width: 72px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default HomeFeaturesItems;

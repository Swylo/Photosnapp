import HomeFeaturesItems from "./HomeFeaturesItems";
import { homeFeaturesElements } from "../libs/homeElements";

function HomeFeatures() {
  return (
    <section className="features-container">
      {homeFeaturesElements.map((element) => (
        <HomeFeaturesItems
          title={element.title}
          text={element.text}
          image={element.image}
          key={element.title}
        />
      ))}
      <style jsx>
        {`
          .features-container {
            position: relative;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 120px 165px;
            gap: 30px;
            z-index: 10;
            background-color: white;
          }

          @media (max-width: 855px) {
            .features-container {
              grid-template-columns: 1fr;
              padding: 120px 155px;
              gap: 80px;
            }
          }

          @media (max-width: 495px) {
            .features-container {
              padding: 80px 32px;
              gap: 56px;
            }
          }
        `}
      </style>
    </section>
  );
}
export default HomeFeatures;

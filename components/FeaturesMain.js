import FeaturesMainItems from "./FeatureMainItems";
import featuresElements from "../libs/featuresElements";

function FeaturesMain() {
  return (
    <section className="container">
      {featuresElements.map((element) => (
        <FeaturesMainItems
          title={element.title}
          text={element.text}
          image={element.image}
          key={element.title}
        />
      ))}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 11% 11.5%;
            gap: 104px 4%;
          }

          @media (max-width: 855px) {
            .container {
              grid-template-columns: 1fr 1fr;
              padding: 112px 40px;
              gap: 72px 11px;
            }
          }

          @media (max-width: 495px) {
            .container {
              grid-template-columns: 1fr;
              padding: 64px 32px 91px;
              gap: 56px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default FeaturesMain;

import { pricingCompareElements } from "../libs/pricingElements";
import CompareItem from "./CompareItem";

function Compare() {
  return (
    <section className="container">
      <div className="title">
        <h1>Compare</h1>
      </div>
      <div className="headers">
        <h4 className="features">The features</h4>
        <div className="plan">
          <h4>Basic</h4>
          <h4>Pro</h4>
          <h4>Business</h4>
        </div>
      </div>
      <div>
        {pricingCompareElements.map((element) => (
          <CompareItem
            title={element.title}
            basic={element.basic}
            pro={element.pro}
            business={element.business}
            key={element.title}
          />
        ))}
      </div>
      <style jsx>
        {`
          .container {
            padding: 0 355px;
            margin-bottom: 160px;
          }
          .title {
            display: flex;
            justify-content: center;
          }
          .title h1 {
            margin: 0 0 56px;
          }
          .headers {
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: 1px solid black;
          }
          h4 {
            margin: 0 0 23px;
          }
          .features {
            padding-left: 24px;
          }
          .plan {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .plan h4 {
            justify-self: center;
          }

          @media (max-width: 1150px) {
            .container {
              padding: 0 200px;
            }
          }
          @media (max-width: 855px) {
            .container {
              padding: 0 40px;
              margin-bottom: 112px;
            }
            .title h1 {
              margin: 0 0 64px;
            }
          }
          @media (max-width: 490px) {
            .container {
              padding: 0 28px;
              margin-bottom: 64px;
            }
            .title h1 {
              display: none;
            }
            .features {
              padding-left: 0;
            }
            .plan {
              display: none;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Compare;

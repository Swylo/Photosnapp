import check from "../public/assets/pricing/desktop/check.svg";
import Image from "next/image";

function CompareItem(props) {
  const { title, basic, pro, business } = props;
  return (
    <div className="features-container">
      <h4>{title}</h4>
      <div className="checking">
        <div className="checked">
          <p className="mobile">BASIC</p>
          {basic && <Image src={check} alt="check" />}
        </div>
        <div className="checked">
          <p className="mobile">PRO</p>
          {pro && <Image src={check} alt="check" />}
        </div>
        <div className="checked">
          <p className="mobile">BUSINESS</p>
          {business && <Image src={check} alt="check" />}
        </div>
      </div>
      <style jsx>
        {`
          .features-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            border-bottom: 1px solid #dfdfdf;
          }
          .features-container h4 {
            margin: 23px 0;
            padding-left: 24px;
          }
          .checking {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .checking .checked {
            justify-self: center;
            align-self: center;
          }
          .mobile {
            display: none;
          }

          @media (max-width: 490px) {
            .features-container {
              display: grid;
              grid-template-columns: 1fr;
              border-bottom: 1px solid #dfdfdf;
            }
            .features-container h4 {
              margin: 23px 0 16px;
              padding-left: 0;
            }
            .checking {
              margin-bottom: 24px;
            }
            .checking .checked {
              justify-self: flex-start;
              align-self: flex-start;
            }
            .mobile {
              display: grid;
              margin: 0 0 8px;
              font-size: 10px;
              font-weight: bold;
              letter-spacing: 1.7px;
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
}

export default CompareItem;

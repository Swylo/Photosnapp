function PricingPlanCard(props) {
  const { title, description, price, main, monthly } = props;
  return (
    <div className="container">
      <div className="desktop">
        {main && <div className="rainbow"></div>}
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
        <div className="price">
          <h1>${price}.00</h1>
          <p>per {monthly ? "month" : "year"}</p>
        </div>
        <button className="btn">Pick Plan</button>
      </div>

      <div className="tablet">
        {main && <div className="rainbow"></div>}
        <div className="main">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <button className="btn">Pick Plan</button>
        </div>
        <div className="price">
          <h1>${price}.00</h1>
          <p>per {monthly ? "month" : "year"}</p>
        </div>
      </div>
      <style jsx>
        {`
          .tablet {
            display: none;
          }
          .container {
            position: relative;
            text-align: center;
            background-color: ${main ? "black" : "#f5f5f5"};
            color: ${main ? "white" : "black"};
            padding: ${main ? "88px 40px 91px" : "56px 40px 40px"};
            height: ${main ? "100%" : "85%"};
            max-width: 350px;
            align-self: center;
            justify-self: center;
          }
          .title {
            margin: 0 0 18px;
          }
          .container p {
            margin: 0;
            opacity: 0.6;
          }
          .price {
            margin: 40px 0;
          }
          .price h1 {
            margin: 0;
          }
          .btn {
            font-family: inherit;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 2px;
            font-weight: 700;
            text-transform: uppercase;
            width: 100%;
            height: 40px;
            border: none;
            background-color: ${main ? "white" : "black"};
            color: ${main ? "black" : "white"};
            cursor: pointer;
            transition: 0.1s ease-in;
          }
          .btn:hover {
            background-color: #dfdfdf;
            color: black;
          }
          .rainbow {
            position: absolute;
            width: 100%;
            height: 5px;
            left: 0;
            top: -5px;
            background: linear-gradient(90deg, #ffc593, #bc7198, #5a77ff);
          }

          @media (max-width: 855px) {
            .tablet {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .desktop {
              display: none;
            }
            .container {
              text-align: initial;
              padding: 40px;
              height: 270px;
              max-width: 100%;
              width: 100%;
            }
            .main {
              max-width: 270px;
            }
            .tablet .description {
              margin-bottom: 28px;
            }
            .tablet .price {
              margin: 0;
              text-align: right;
            }
            .tablet .rainbow {
              position: absolute;
              height: 100%;
              width: 5px;
              left: 0;
              top: 0;
              background: linear-gradient(0deg, #ffc593, #bc7198, #5a77ff);
            }
          }
          @media (max-width: 600px) {
            .container {
              padding: 30px;
            }
          }
          @media (max-width: 490px) {
            .tablet {
              display: none;
            }
            .desktop {
              display: initial;
            }
            .container {
              position: relative;
              text-align: center;
              padding: 48px 22px;
              height: 407px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default PricingPlanCard;

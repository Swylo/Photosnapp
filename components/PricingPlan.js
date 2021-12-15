import React, { useState } from "react";
import PricingPlanCard from "./PricingPlanCard";
import { pricingPlanElements } from "../libs/pricingElements";

function PricingPlan() {
  const [plan, setPlan] = useState("monthly");

  const togglePlan = () => {
    if (plan === "monthly") {
      setPlan("yearly");
    } else {
      setPlan("monthly");
    }
  };

  return (
    <section className="container">
      <div className="plan-choice">
        <h3 className="monthly">Monthly</h3>
        <div className="switch" onClick={togglePlan}>
          <div className="switch-handle"></div>
        </div>
        <h3 className="yearly">Yearly</h3>
      </div>
      <div className="card">
        {pricingPlanElements.map((ele) => (
          <PricingPlanCard
            title={ele.title}
            description={ele.description}
            main={ele.main}
            price={plan === "monthly" ? ele.price : ele.price * 10}
            key={ele.title}
            monthly={plan === "monthly" ? true : false}
          />
        ))}
      </div>
      <style jsx>
        {`
          .container {
            padding: 0 11.5%;
            margin: 120px auto 160px;
            max-width: 1500px;
          }
          .card {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          .plan-choice {
            width: 255px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto 48px;
          }
          .switch {
            width: 64px;
            height: 32px;
            background-color: ${plan === "monthly" ? "#dfdfdf" : "#000"};
            border-radius: 32px;
            cursor: pointer;
          }
          .switch-handle {
            width: 24px;
            height: 24px;
            background-color: ${plan === "monthly" ? "#000" : "#fff"};
            border-radius: 50%;
            transform: ${plan === "monthly"
              ? "translate(4px, 4px)"
              : "translate(36px, 4px)"};
          }
          .monthly {
            opacity: ${plan === "monthly" ? 1 : 0.5};
          }
          .yearly {
            opacity: ${plan === "yearly" ? 1 : 0.5};
          }
          .monthly,
          .yearly,
          .switch,
          .switch-handle {
            transition: 0.15s ease-in;
          }

          @media (max-width: 855px) {
            .container {
              padding: 0 40px;
              margin: 112px auto 112px;
            }
            .card {
              grid-template-columns: 1fr;
              gap: 24px;
            }
          }
          @media (max-width: 490px) {
            .container {
              padding: 0 28px;
              margin: 64px auto 64px;
            }
            .card {
              grid-template-columns: 1fr;
              gap: 24px;
            }
          }
        `}
      </style>
    </section>
  );
}

export default PricingPlan;

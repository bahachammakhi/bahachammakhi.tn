import React, { useState } from "react";
import ServiceCard from "../components/ui/ServiceCard/ServiceCard";

const services = [
  { title: "Web development", description: "Fast and secure web applications" },
];

const Services = () => {
  const serviceGroup = services.map((el, n) => {
    let animation = "fade-left";
    let classname = "card";
    if (n % 2 === 0) {
      animation = "fade-right";
      classname = "cardLeft";
    }
    return (
      <div key={n} data-aos={animation} className={classname}>
        <ServiceCard title={el.title} description={el.description} />
      </div>
    );
  });
  return (
    <div className="wrapper">
      <span className="title">Services</span>
      <div className="group">{serviceGroup}</div>
      <style jsx>
        {`
          .wrapper {
            margin-top: 2%;
          }
          .title {
            border-bottom: 4px solid #2a878f;
            padding-bottom: 5px;
            font-size: 2em;
            font-weight: bolder;
            color: black;
            border-radius: 5px;
          }
          .card {
            margin-top: 4%;
          }
          .cardLeft {
            margin-top: 2%;
          }
          .group {
          }

          @media only screen and (max-width: 767px) {
            .card {
              margin-top: 10%;
            }
            .group {
              margin-top: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Services;

import React, { FC } from "react";
import "./styles.css";

const Hero: FC = () => {
  return (
    <section className="hero-container">
      <div className="container">
        <h1>
          Lorem ipsum dolor sit <br />
          amet, consetetur
        </h1>
        <span className="primary-line-trace"></span>
      </div>
    </section>
  );
};

export default Hero;

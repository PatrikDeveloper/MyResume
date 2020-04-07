import React from "react";
import "./styles.css";

export default function Title(props) {
  return (
    <section className="accordion__section">
      <button className="accordionTitle__wrapper">
        <p className="accordionTitle__text">{props.title}</p>
      </button>
      <div className="accordionContent__wrapper">{props.description}</div>
    </section>
  );
}

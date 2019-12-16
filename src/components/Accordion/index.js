import React from 'react';
import "./styles.css";

function Accordion (props) {
  return (
    <section className='accordion__section'>
      <button className='accordionTitle__wrapper'>
        <p className='accordionTitle__text'>{props.title}</p>
      </button>
       <div className='accordionContent__wrapper'>
          {props.children}
      </div> 
    </section>
  );
}

export default Accordion;
import React from 'react';

const Infobox = (props) => {
  return (
    <div className={props.styleName}>
      <div className="info-box__icon">
        <span className="icon icon--infobox icon--home"/>
      </div>
      <div className="info-box__total">
        <p className="info-box__text">Total Status</p>
        <span className="info-box__number">233.423</span>
      </div>
    </div>
  );
};

export default Infobox;
import React from 'react';
import Infobox from './infobox.js';

class UIElements extends React.Component {
  render() {
    return (
      <div className="content-inner content-inner--elements">
        <Infobox styleName="info-box" />
        <Infobox styleName="info-box info-box--secondary"/>
        <Infobox styleName="info-box"/>
      </div>
    );
  }
}

export default UIElements;
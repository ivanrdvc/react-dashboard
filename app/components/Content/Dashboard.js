import React from 'react';
import Infobox from './infobox.js';
import MessageItem from '../MessageItem.js/MessageItem.js';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content-inner">
        <div className="card card--medium">
          <h4 className="card__title">Latest Report</h4>
          <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur</p>
          <div className="card__content">
            <MessageItem title="Design & Development"
                  subtitle="Design & Development"
                  topic="Last Sale Today"
                  comments="13"/>
            <MessageItem title="Design & Development"
                  subtitle="Design & Development"
                  topic="Last Sale Today"
                  comments="13"/>
            <MessageItem title="Design & Development"
                  subtitle="Design & Development"
                  topic="Last Sale Today"
                  comments="13"/>
            <MessageItem title="Design & Development"
                  subtitle="Design & Development"
                  topic="Last Sale Today"
                  comments="13"/>
          </div>
        </div>

        <div className="card card--small card--transparent">
          <Infobox styleName="info-box" />
          <Infobox styleName="info-box info-box--secondary"/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
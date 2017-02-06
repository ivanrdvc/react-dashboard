import React from 'react';
import MessageItem from '../MessageItem.js/MessageItem.js';

class Message extends React.Component {
  render() {
    return (
      <div className="content-inner">
        <div className="card card--medium">
          <h4 className="card__title">Messages</h4>
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
      </div>
    );
  }
}

export default Message;
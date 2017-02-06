import React from 'react';

const MessageItem = (props) => {
  return (
    <ul className="messages">
      <li className="messages__item">
        <img className="messages__avatar" src="assets/img/avatar.jpg"/>
      </li>
      <li className="messages__item messages__item--medium">
        <h5 className="messages__title">{props.title}</h5>
        <span className="messages__subtitle">{props.subtitle}</span>
      </li>
      <li className="messages__item">
        <span className="messages__topic">{props.topic}</span>
      </li>
      <li className="messages__item messages__item--small">
        <div className="messages__comments">
          <span className="icon icon--comment"/>
          <span>{props.comments} Comments</span>
        </div>
      </li>
      <li className="messages__item">
        <a className="button button--messages" href="#">Edit</a>
        <span className="icon icon--card icon--delete"/>
      </li>
    </ul>
  );
};

export default MessageItem;
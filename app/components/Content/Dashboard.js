import React from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="content-inner">
        <div className="card card--medium">
          <h4 className="card__title">Latest Report</h4>
          <p className="card__subtitle">Lorem ipsum dolor sit amet, consectetur</p>
          <div className="card__content">

            <ul className="messages">
              <li className="messages__item">
                <img className="messages__avatar" src="assets/img/avatar.jpg"/>
              </li>
              <li className="messages__item messages__item--medium">
                <h5 className="messages__title">Project Title</h5>
                <span className="messages__subtitle">Design & Development</span>
              </li>
              <li className="messages__item">
                <span className="messages__topic">Last Sale Today</span>
              </li>
              <li className="messages__item messages__item--small">
                <div className="messages__comments">
                  <span className="icon icon--comment"/>
                  <span>13 Comments</span>
                </div>
              </li>
              <li className="messages__item">
                <a className="button button--messages" href="#">Edit</a>
              </li>
            </ul>

            <ul className="messages">
              <li className="messages__item">
                <img className="messages__avatar" src="assets/img/avatar.jpg"/>
              </li>
              <li className="messages__item messages__item--medium">
                <h5 className="messages__title">Project Title</h5>
                <span className="messages__subtitle">Design & Development</span>
              </li>
              <li className="messages__item">
                <span className="messages__topic">Last Sale Today</span>
              </li>
              <li className="messages__item messages__item--small">
                <div className="messages__comments">
                  <span className="icon icon--comment"/>
                  <span>13 Comments</span>
                </div>
              </li>
              <li className="messages__item">
                <a className="button button--messages" href="#">Edit</a>
              </li>
            </ul>

            <ul className="messages">
              <li className="messages__item">
                <img className="messages__avatar" src="assets/img/avatar.jpg"/>
              </li>
              <li className="messages__item messages__item--medium">
                <h5 className="messages__title">Project Title</h5>
                <span className="messages__subtitle">Design & Development</span>
              </li>
              <li className="messages__item">
                <span className="messages__topic">Last Sale Today</span>
              </li>
              <li className="messages__item messages__item--small">
                <div className="messages__comments">
                  <span className="icon icon--comment"/>
                  <span>13 Comments</span>
                </div>
              </li>
              <li className="messages__item">
                <a className="button button--messages" href="#">Edit</a>
              </li>
            </ul>

            <ul className="messages">
              <li className="messages__item">
                <img className="messages__avatar" src="assets/img/avatar.jpg"/>
              </li>
              <li className="messages__item messages__item--medium">
                <h5 className="messages__title">Project Title</h5>
                <span className="messages__subtitle">Design & Development</span>
              </li>
              <li className="messages__item">
                <span className="messages__topic">Last Sale Today</span>
              </li>
              <li className="messages__item messages__item--small">
                <div className="messages__comments">
                  <span className="icon icon--card icon--comment"/>
                  <span>13 Comments</span>
                </div>
              </li>
              <li className="messages__item">
                <a className="button button--messages" href="#">Edit</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="card card--small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, aspernatur assumenda atque culpa cum eum hic impedit ipsa magni neque quam quas quia, quibusdam reiciendis repudiandae velit! Doloribus inventore magni minus nulla, quis sequi. Commodi dolorem dolorum exercitationem, impedit itaque possimus quasi repudiandae. Ab blanditiis soluta unde. Quae, velit.
          </div>
      </div>
    );
  }
}

// <span className="icon icon--card icon--delete"/>
export default Dashboard;
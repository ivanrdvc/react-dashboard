import React from 'react';
import {Link} from 'react-router';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashboard" onClick={this.props.handleMenuOverlay} className="sidebar-menu__item"  activeClassName="sidebar-menu__item--active" title="Dashboard">
              <span className="icon icon--sidebar icon--home"/>
              <span className="sidebar-menu__text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/featured" onClick={this.props.handleMenuOverlay} className="sidebar-menu__item" activeClassName="sidebar-menu__item--active" title="Featured">
              <span className="icon icon--sidebar icon--bell" />
              <span className="sidebar-menu__text">Featured</span>
            </Link>
          </li>
          <li>
            <Link to="/Message" onClick={this.props.handleMenuOverlay} className="sidebar-menu__item" title="Dashboard" activeClassName="sidebar-menu__item--active" title="Message">
              <span className="icon icon--sidebar icon--mail"/>
              <span className="sidebar-menu__text">Message</span>
            </Link>
          </li>
          <li>
            <Link to="/UIElements" onClick={this.props.handleMenuOverlay} className="sidebar-menu__item" activeClassName="sidebar-menu__item--active" title="UI Elements">
              <span className="icon icon--sidebar icon--pie"/>
              <span className="sidebar-menu__text">UI Elements</span>
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={this.props.handleMenuOverlay} className="sidebar-menu__item" activeClassName="sidebar-menu__item--active" title="Support">
              <span className="icon icon--sidebar icon--chart"/>
              <span className="sidebar-menu__text">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={this.props.handleMenuOverlay} className="sidebar-menu__item" activeClassName="sidebar-menu__item--active" title="Settings">
              <span className="icon icon--sidebar icon--settings"/>
              <span className="sidebar-menu__text">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
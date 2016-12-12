import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  render() {
    let messagesClasses = this.props.messagesOpen ? 'dropdown dropdown--messages dropdown--open' : 'dropdown';
    let loginClasses = this.props.loginOpen ? 'dropdown dropdown--login dropdown--open' : 'dropdown';

    return (
      <div className="header">
        <div className="logo">
          Admin
          <span className="toggle--close icon icon--sidebar icon--close" onClick={this.props.handleMenu}/>
        </div>
        <div className="nav">
          <div className="search">
            <span className="icon icon--nav icon--search"/>
            <input className="search__input" type="text" name="search" placeholder="Search"/>
          </div>
          <div className="toggle" onClick={this.props.handleMenu}>
            <span className="icon icon--nav icon--menu"/>
          </div>

          <div className="nav__message" onClick={this.props.handleMessagesDropdown}>
            <span className="icon icon--nav icon--mail"/>
            <span className="alert alert--message">4</span>
            <div className={messagesClasses}>
              <ul className="login__menu">
                <li><Link to="/" className="login__menu-item">Message One</Link></li>
                <li><Link to="/" className="login__menu-item">Message Two</Link></li>
                <li><Link to="/" className="login__menu-item">Message Three</Link></li>
              </ul>
            </div>
          </div>

          <div className="nav__notification">
            <span className="icon icon--nav icon--bell"/>
          </div>

          <div className="login" onClick={this.props.handleLoginDropdown}>
            <span className="login__name">Name Here</span>
            <img className="login__avatar" src="assets/img/avatar.jpg"/>
            <div className={loginClasses}>
              <ul className="login__menu">
                <li><Link to="/" className="login__menu-item">Profile</Link></li>
                <li><Link to="/Settings" className="login__menu-item" href="#">Settings</Link></li>
                <li className="dropdown__divider"/>
                <li><Link to="/login" className="login__menu-item">Logout</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//<span className="alert alert--notification">1</span>
export default Header;
import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuToggle: '',
      messagesOpen: false,
      loginOpen: false,
      themeGreen: false
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleMenuOverlay = this.handleMenuOverlay.bind(this);
    this.handleMessagesDropdown = this.handleMessagesDropdown.bind(this);
    this.handleLoginDropdown = this.handleLoginDropdown.bind(this);
    this.handleDropdownOverlay = this.handleDropdownOverlay.bind(this);
    this.handleThemeGreen = this.handleThemeGreen.bind(this)
  }

  handleMenu() {
    var menuToggleStatus = (this.state.menuToggle === '') ? 'sidebar--active' : '';
    this.setState({menuToggle: menuToggleStatus});
  }

  handleMenuOverlay() {
    if (this.state.menuToggle === 'sidebar--active') {
      this.setState({menuToggle: ''});
    }
  }

  handleDropdownOverlay() {
    if (this.state.messagesOpen) {
      this.setState({messagesOpen: false});
    } else if (this.state.loginOpen) {
      this.setState({loginOpen: false})
    }
  }

  handleMessagesDropdown() {
    this.setState({messagesOpen: !this.state.messagesOpen});
    this.setState({loginOpen: false});
  }

  handleLoginDropdown() {
    this.setState({loginOpen: !this.state.loginOpen});
    this.setState({messagesOpen: false});
  }

  handleThemeGreen() {
    this.setState({themeGreen: !this.state.themeGreen});
  }

  render() {
    return (
      <div className={"app" + ' ' + this.state.menuToggle} onClick={this.handleDropdownOverlay}>
        <Header menuToggle={this.state.menuToggle}
                handleMenu={this.handleMenu}
                messagesOpen={this.state.messagesOpen}
                loginOpen={this.state.loginOpen}
                handleMessagesDropdown={this.handleMessagesDropdown}
                handleLoginDropdown={this.handleLoginDropdown}/>
        <div className="main">
          <Sidebar handleMenuOverlay={this.handleMenuOverlay}/>
          {this.props.children}
          <div className="overlay" onClick={this.handleMenuOverlay}></div>
        </div>
      </div>
    );
  }
}
export default App;
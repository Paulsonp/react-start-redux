import React, { Component } from "react";
import { connect } from "react-redux";

import SideDrawer from "components/SideNav/SideDrawer";
import * as actions from "actions";
import "cssStyles/style.scss";

class App extends Component {
  renderHeader() {
    return (
      <div>
        <SideDrawer />
      </div>
    );
  }
  render() {
    return <div>{this.renderHeader()}</div>;
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);

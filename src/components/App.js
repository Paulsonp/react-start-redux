import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as actions from "actions";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <Button variant="contained" color="secondary" onClick={() => this.props.changeAuth(false)}>
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button variant="contained" color="primary" onClick={() => this.props.changeAuth(true)}>
          Sign In
        </Button>
      );
    }
  }
  renderHeader() {
    return (
      <Breadcrumbs aria-label="breadcrumb">
        <Typography>
          <Link to="/">Home</Link>
        </Typography>

        <Link to="/post">Post a Comment</Link>
        <Typography color="textPrimary">{this.renderButton()}</Typography>
      </Breadcrumbs>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);

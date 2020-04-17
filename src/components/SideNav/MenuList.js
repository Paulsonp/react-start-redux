import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import MailIcon from "@material-ui/icons/Mail";

import * as actions from "actions";
import "cssStyles/menuList.scss";

class MenuList extends Component {
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
      <div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/">Home</Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <Link to="/post">Post A Comment</Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <Link to="/users">User List</Link>
          </ListItem>
        </List>
        <Divider />
        <List>{this.renderButton()}</List>
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
)(MenuList);

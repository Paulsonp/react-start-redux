import React, { Component } from "react";
import { connect } from "react-redux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map((comment, index) => {
      console.log("hai", comment);
      // return <li key={index}>{comment}</li>;
      return (
        <List key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={comment.name} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary={comment.name}
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {comment.email}
                  </Typography>
                  {comment.body}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      );
    });
  }
  render() {
    return (
      <div>
        <h4>Comment List</h4>
        {/* <ul>{this.renderComments()}</ul> */}
        {this.renderComments()}
      </div>
    );
  }
}

function mapStateToPros(state) {
  return { comments: state.comments };
}
export default connect(mapStateToPros)(CommentList);

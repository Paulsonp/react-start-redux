import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import "cssStyles/userList.scss";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core/";
import Container from "@material-ui/core/Container";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map((user, index) => {
      console.log("hai", user);
      return (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card key={index} className="card">
            <CardHeader
              avatar={<Avatar alt={user.username} src="/static/images/avatar/1.jpg" />}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={user.username}
              subheader={user.email}
            />
            <CardMedia image="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg" title="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Company: {user.company.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {user.company.catchPhrase}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {user.company.bs}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Address: {user.address.street} {user.address.suite}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {user.address.city}, ZipCode: {user.address.zipcode}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="show more">
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      );
    });
  }
  render() {
    return (
      <Container maxwidthxs="true" maxWidth="lg" fixed>
        <Grid container spacing={2} direction="row" justify="flex-start" alignItems="flex-start">
          {this.renderUsers()}
        </Grid>
      </Container>
    );
  }
}

function mapStateToPros(state) {
  return { users: state.users };
}
export default connect(
  mapStateToPros,
  actions
)(UserList);

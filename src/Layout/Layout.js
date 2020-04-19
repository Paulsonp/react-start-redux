import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "components/SideNav/Header";
import Sidebar from "components/SideNav/SideDrawer";

// pages
// import Dashboard from "../../pages/dashboard/Dashboard";
// import Typography from "../../pages/typography";
// import Notifications from "../../pages/notifications";
// import Maps from "../../pages/maps";
// import Tables from "../../pages/tables";
// import Icons from "../../pages/icons";
// import Charts from "../../pages/charts";
import CommentLis from "Layout/modules/dashboard/Dashboard";
import CommentList from "Layout/modules/commentList/CommentList";
import CommentBox from "Layout/modules/commentBox/CommentBox";
import UserList from "Layout/modules/userList/UserList";

// context
import { useLayoutState } from "context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header history={props.history} />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={CommentLis} />
            <Route path="/app/userList" component={UserList} />
            <Route path="/app/commentList" component={CommentList} />
            <Route path="/app/commentsPost" component={CommentBox} />
          </Switch>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);

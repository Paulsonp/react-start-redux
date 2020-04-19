import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// import * as actions from "actions";
import "cssStyles/style.scss";

// components
import Layout from "Layout/Layout";
import Login from "Layout/modules/login/Login";

// context
import { useUserState } from "context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="app/dashbord" />} />
        <Route exact path="/app" render={() => <Redirect to="app/dashbord" />} />
        <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} />
        {/* <Route component={Error} /> */}
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}

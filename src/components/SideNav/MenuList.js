import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

export default function SidebarLink({ link, icon, label, children, location, isSidebarOpened, nested, type }) {
  var classes = useStyles();

  // local
  var isLinkActive = link && (location.pathname === link || location.pathname.indexOf(link) !== -1);

  if (!children)
    return (
      <ListItem
        button
        component={link && Link}
        to={link}
        className={classes.link}
        classes={{
          root: classnames(classes.linkRoot, {
            [classes.linkActive]: isLinkActive && !nested,
            [classes.linkNested]: nested
          })
        }}
        disableRipple
      >
        <ListItemIcon
          className={classnames(classes.linkIcon, {
            [classes.linkIconActive]: isLinkActive
          })}
        >
          {nested ? (
            <div
              className={classnames(classes.linkIcon, {
                [classes.linkIconActive]: isLinkActive
              })}
              color={isLinkActive && "primary"}
            />
          ) : (
            icon
          )}
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classnames(classes.linkText, {
              [classes.linkTextActive]: isLinkActive,
              [classes.linkTextHidden]: !isSidebarOpened
            })
          }}
          primary={label}
        />
      </ListItem>
    );

  // ###########################################################
}

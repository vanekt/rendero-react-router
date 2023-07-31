import React from "react";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";

function initModule() {
  return {
    name: "react-router",
    components: {
      router_link: (props, { renderChildren }) => (
        <Link {...props}>{renderChildren()}</Link>
      ),
      router_nav_link: (props, { renderChildren }) => (
        <NavLink {...props}>{renderChildren()}</NavLink>
      ),
      router_redirect: (props, { renderChildren }) => (
        <Redirect {...props}>{renderChildren()}</Redirect>
      ),
      router_route: (props, { renderChildren }) => (
        <Route {...props}>{renderChildren()}</Route>
      ),
      router_switch: (props, { renderChildren }) => (
        <Switch {...props}>{renderChildren()}</Switch>
      ),
    },
  };
}

export default initModule;

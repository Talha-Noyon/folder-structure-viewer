import React from "react";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
export const Routes = withRouter(({history}) => {
    return (
        <Switch>
            {
                /* Redirect from root URL to /dashboard. */
                <Redirect exact from="/" to="/dashboard" />
            }
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
});

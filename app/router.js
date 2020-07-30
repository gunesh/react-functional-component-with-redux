// import external modules
import React, { Component, Suspense } from "react";
import { HashRouter, Switch, Redirect } from "react-router-dom";
import Spinner from "../utility/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/mainRoutes";
import ErrorLayoutRoute from "../layouts/routes/mainRoutes";


// Main Layout
import LazyViewDashboardPage  from  "../views/dashboard/DashboardComponent";

// Full Layout
import LazyLogin  from  "../views/login/LoginComponent";
// Error Pages
import LazyErrorPage  from  "../views/error/ErrorComponent";


const Router = () => {
  return (
    <HashRouter basename="/">
      <Switch>
        <ErrorLayoutRoute
          exact
          path="/"
          render={() => <Redirect to="/login" />}
        />
        <MainLayoutRoutes
          exact
          path="/dashboard"
          render={matchprops => (
            <Suspense fallback={<Spinner />}>
              <LazyViewDashboardPage {...matchprops} />
            </Suspense>
          )}
        />
        <MainLayoutRoutes
          exact
          path="/home"
          render={matchprops => (
            <Suspense fallback={<Spinner />}>
              <LazyViewDashboardPage {...matchprops} />
            </Suspense>
          )}
        />

        <FullPageLayout
          exact
          path="/login"
          render={matchprops => (
            <Suspense fallback={<Spinner />}>
              <LazyLogin {...matchprops} />
            </Suspense>
          )}
        />
        <ErrorLayoutRoute
          exact
          path="/error"
          render={matchprops => (
            <Suspense fallback={<Spinner />}>
              <LazyErrorPage {...matchprops} />
            </Suspense>
          )}
        />
        <ErrorLayoutRoute
          render={matchprops => (
            <Suspense fallback={<Spinner />}>
              <LazyErrorPage {...matchprops} />
            </Suspense>
          )}
        />
      </Switch>
    </HashRouter>
  );
};
export default Router;

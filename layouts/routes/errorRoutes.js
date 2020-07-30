// import external modules
import React from "react";
import { Route, Redirect } from "react-router-dom";

// import internal(own) modules
import ErrorLayout from "../errorLayout";

const ErrorLayoutRoute = ({ render, ...rest }) => {
   const JwTtoken = 'true';
   return (
      <Route
         {...rest}
         render={matchProps =>
            JwTtoken ?
               <Redirect to="/dashboard" /> :
               <ErrorLayout>{render(matchProps)}</ErrorLayout>}
      />
   );
};

export default ErrorLayoutRoute;

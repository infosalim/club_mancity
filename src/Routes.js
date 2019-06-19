import React from 'react';
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';

import Home from './Components/Home/Index';
import SignIn from './Components/Signin/Index';
import Dashboard from './Components/Admin/Dashboard';

const Routes = (props) => {
  console.log(props);
  return(
    <div>
      <Layout>
        <Switch>
          <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />
          <Route exact component={SignIn} path="/sign_in" />
          <Route exact component={Home} path="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;

import React from 'react';
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoutes from './Components/AuthRoutes/PublicRoutes';

import Home from './Components/Home/Index';
import SignIn from './Components/Signin/Index';
import Dashboard from './Components/Admin/Dashboard';

const Routes = (props) => {
  return(
    <div>
      <Layout>
        <Switch>
          <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />
          <PublicRoutes {...props} restrickted={true} exact component={SignIn} path="/sign_in" />
          <PublicRoutes {...props} restrickted={false} exact component={Home} path="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;

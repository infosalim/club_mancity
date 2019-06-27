import React from 'react';
import Layout from './Hoc/Layout'
import { Switch } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoutes from './Components/AuthRoutes/PublicRoutes';

import Home from './Components/Home/Index';
import SignIn from './Components/Signin/Index';
import Dashboard from './Components/Admin/Dashboard';
import AdminMatches from './Components/Admin/Matches/index';
import AddEditMatch from './Components/Admin/Matches/AddEditMatch';


const Routes = (props) => {
  return(
    <div>
      <Layout>
        <Switch>
          <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match" />
          <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match/:id" />
          <PrivateRoute {...props} exact component={AdminMatches} path="/admin_matches" />
          <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />
          <PublicRoutes {...props} restrickted={true} exact component={SignIn} path="/sign_in" />
          <PublicRoutes {...props} restrickted={false} exact component={Home} path="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;

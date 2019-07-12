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
import AdminPlayer from './Components/Admin/Players/Index';
import AddEditPlayers from './Components/Admin/Players/AddEditPlayers';
import TheTeam from './Components/TheTeam/index';
import TheMatches from './Components/TheMatches/Index';
import NotFound from './Components/UI/Not_found';


const Routes = (props) => {
  return (
    <div>
      <Layout>
        <Switch>
        <PrivateRoute {...props} exact component={AddEditPlayers} path="/admin_players/add_players" />
          <PrivateRoute {...props} exact component={AddEditPlayers} path="/admin_players/add_players/:id" />
          <PrivateRoute {...props} exact component={AdminPlayer} path="/admin_players" />
          <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match" />
          <PrivateRoute {...props} exact component={AddEditMatch} path="/admin_matches/edit_match/:id" />
          <PrivateRoute {...props} exact component={AdminMatches} path="/admin_matches" />
          <PrivateRoute {...props} exact component={Dashboard} path="/dashboard" />
          <PublicRoutes {...props} restrickted={true} exact component={SignIn} path="/sign_in" />
          <PublicRoutes {...props} restrickted={false} exact component={TheTeam} path="/the_team" />
          <PublicRoutes {...props} restrickted={false} exact component={TheMatches} path="/matches" />
          <PublicRoutes {...props} restrickted={false} exact component={Home} path="/" />
          <PublicRoutes {...props} restrickted={false} component={NotFound} />
        </Switch>
      </Layout>
    </div>
  );
}

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FullRoster from './../FullRoster/FullRoster';
import Player from './../Player/Player';

const Roster = () => (
  <div>
    <h1>This is a rosters page</h1>
    <Switch>
      <Route exact path="/roster" component={FullRoster} />
      <Route path="/roster/:number" component={Player} />
    </Switch>
  </div>
);

export default Roster;

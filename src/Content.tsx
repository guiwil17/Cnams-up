import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PATHS } from './routes';

import Page404 from "./Page/404";
import Home from './Page/Home';


const Content: React.FC<{}> = () => {

  return (
    <Switch>
      <Route exact path={PATHS.HOME} component={Home} />
      <Route component={Page404} />
    </Switch>
  );
};

export default Content;
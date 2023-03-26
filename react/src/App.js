import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page from './main/Page';
import NotFound from './main/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

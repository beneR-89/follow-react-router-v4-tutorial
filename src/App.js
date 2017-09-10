import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Header from './Header/Header';
import Main from './Main/Main';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Main />
    </div>
  </Router>
);

export default App;

import React, { Component, Fragment } from 'react';

import 'semantic-ui-css/semantic.min.css';

import Navigation from './Navigation';
import Main from './Main';

class App extends Component {
  render() {
    return (
        <Fragment>
            <Navigation />
            <Main />
        </Fragment>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';

import 'semantic-ui-css/semantic.min.css';

import ResponsiveSidebar from './layouts/ResponsiveSidebar';
import Main from './layouts/Main';

class App extends Component {

    render() {
        return (
            <Fragment>
                <ResponsiveSidebar />
                <Main />
            </Fragment>
        );
    }
}

export default App;

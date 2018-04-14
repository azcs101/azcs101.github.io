import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Home, Project, Schedule } from './pages';

export default class Main extends Component {
    render() {
        return (
            <Container style={{ marginTop: '3em' }}>
                <Route path="/schedule" component={Schedule} exact />
                <Route path="/project" component={Project} exact />
                <Route path="/" component={Home} exact />
            </Container>
        );
    }
}

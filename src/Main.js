import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Announcements, Project, Schedule } from './pages';

export default class Main extends Component {
    render() {
        return (
            <Container style={{ marginTop: '3em' }}>
                <Switch>
                    <Route path="/schedule" component={Schedule} exact />
                    <Route path="/project" component={Project} exact />
                    <Route path="/announcements" component={Announcements} exact />
                    <Redirect from ="/" to="announcements" />
                </Switch>
            </Container>
        );
    }
}

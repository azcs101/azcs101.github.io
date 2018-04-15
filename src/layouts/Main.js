import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container, Sidebar } from 'semantic-ui-react';

import { Announcements, Project, Schedule } from '../pages';

export default class Main extends Component {
    render() {
        return (
            <Sidebar.Pusher>
                <Container style={{ padding: '75px 20px' }}>
                    <Switch>
                        <Route path="/schedule" component={Schedule} exact />
                        <Route path="/project" component={Project} exact />
                        <Route path="/announcements" component={Announcements} exact />
                        <Redirect from ="/" to="announcements" />
                    </Switch>
                </Container>
            </Sidebar.Pusher>
        );
    }
}

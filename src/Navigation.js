import React, { Component } from 'react';

import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';


export default class Navigation extends Component {
    render() {
        return (
            <Sidebar as={Menu} visible icon="labeled" vertical>
                <Menu.Item name="home" as={NavLink} to="/">
                    <Icon name="home" /> Home
                </Menu.Item>
                <Menu.Item name="schedule" as={NavLink} to="/schedule">
                    <Icon name="calendar" /> Schedule
                </Menu.Item>
                <Menu.Item name="stride">
                    <Icon name="chat" /> Stride
                </Menu.Item>
                <Menu.Item name="project" as={NavLink} to="/project">
                    <Icon name="idea" /> Project
                </Menu.Item>
            </Sidebar>
        );
    }
}

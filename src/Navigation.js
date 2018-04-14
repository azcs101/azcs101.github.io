import React, { Component } from 'react';

import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';


export default class Navigation extends Component {
    render() {
        return (
            <Sidebar as={Menu} visible icon="labeled" vertical color="blue" borderless>
                <Menu.Item name="announcements" as={NavLink} to="/announcements">
                    <Icon name="announcement" /> Announcements
                </Menu.Item>
                <Menu.Item name="schedule" as={NavLink} to="/schedule">
                    <Icon name="calendar" /> Schedule
                </Menu.Item>
                <Menu.Item name="project" as={NavLink} to="/project">
                    <Icon name="idea" /> Project
                </Menu.Item>
                <Menu.Item as="a" href="https://www.stride.com" name="stride">
                    <Icon name="chat" /> Stride
                </Menu.Item>
                <Menu.Item as="a" href="https://github.com/azcs101" target="_blank" rel="external">
                    <Icon name="github" /> Github
                </Menu.Item>
            </Sidebar>
        );
    }
}

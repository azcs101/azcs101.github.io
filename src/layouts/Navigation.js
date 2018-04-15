import React from 'react';
import { bool, string } from 'prop-types';

import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';

const Navigation = ({ className, visible }) =>
    <Sidebar as={Menu} className={className} animation="overlay" visible={visible} width="thin" icon="labeled" color="blue" vertical borderless inverted>
        <Menu.Item name="announcements" as={NavLink} to="/announcements">
            <Icon name="announcement" /> Announcements
        </Menu.Item>
        <Menu.Item name="schedule" as={NavLink} to="/schedule">
            <Icon name="calendar" /> Schedule
        </Menu.Item>
        <Menu.Item name="project" as={NavLink} to="/project">
            <Icon name="idea" /> Project
        </Menu.Item>
        <Menu.Item as="a" target="_blank" rel="external" href="https://docs.google.com/forms/d/1ezrtKusUHmBrnLC7-hP7F3U2sly-ymubu9vMUjGXzo0/" name="stride">
            <Icon name="chat" /> Stride Registration Form
        </Menu.Item>
        <Menu.Item as="a" href="https://github.com/azcs101" target="_blank" rel="external">
            <Icon name="github" /> Github
        </Menu.Item>
    </Sidebar>
;

Navigation.propTypes = {
    visible: bool.isRequired,
    className: string
};

Navigation.defaultProps = {
    className: ''
};

export default Navigation;

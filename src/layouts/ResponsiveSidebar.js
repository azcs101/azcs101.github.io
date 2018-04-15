import React, { Component, Fragment } from 'react';

import { Responsive, Button } from 'semantic-ui-react';

import Navigation from './Navigation';

import './sidebar.css';

class ResponsiveSidebar extends Component {

    state = { visible: false };

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        return (
            <Fragment>
                <Responsive minWidth={768} as={Fragment}>
                    <Navigation visible={true} />
                </Responsive>
                <Responsive maxWidth={768} as={Fragment}>
                    <Navigation visible={this.state.visible} className="sidebar-mobile" />
                    <Button active={false} onClick={this.toggleVisibility} color="blue" className="sidebar-mobile-toggle" icon="content" size="big" />
                </Responsive>
            </Fragment>
        );
    }
}

export default ResponsiveSidebar;

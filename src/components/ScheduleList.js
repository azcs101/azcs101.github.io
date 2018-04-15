import React, { Component } from 'react';
import { string, shape, arrayOf } from 'prop-types';

import { Accordion } from 'semantic-ui-react';

import ScheduleListItem from './ScheduleListItem';

export class ScheduleList extends Component {

    state = { active: 0 };

    handleClick = (e, { index }) => {
        this.setState({ active: index === this.state.active ? -1 : index });
    }

    render() {
        return (
            <Accordion styled fluid>
                {this.props.data.map((item, i) =>
                    <ScheduleListItem
                        index={i}
                        key={i}
                        active={this.state.active}
                        title={item.title}
                        date={item.date}
                        links={item.links}
                        handleClick={this.handleClick}
                    >
                        {item.content}
                    </ScheduleListItem>
                )}
            </Accordion>
        );
    }
}

ScheduleList.propTypes = {
    data: arrayOf(shape({
        title: string.isRequired,
        date: string.isRequired,
        content: string.isRequired,
        links: shape({
            slides: string,
            source: string
        })
    }))
};

ScheduleList.defaultProps = {
    data: []
};

export default ScheduleList;

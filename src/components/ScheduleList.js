import React, { Component } from 'react';

import { Accordion } from 'semantic-ui-react';

import ScheduleListItem from './ScheduleListItem';

export class ScheduleList extends Component {

    state = { active: 0 };

    handleClick = (e, { index }) => {
        this.setState({ active: index == this.state.active ? -1 : index });
    }

    render() {
        return (
            <Accordion>
                {this.props.data.map((item, i) =>
                    <ScheduleListItem active={this.state.active} index={i} title={item.title} handleClick={this.handleClick}>
                        {item.content}
                    </ScheduleListItem>
                )}
            </Accordion>
        );
    }
}

export default ScheduleList;

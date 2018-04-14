import React, { Fragment } from 'react';
import { string, number, node, func } from 'prop-types';

import { Accordion, Icon } from 'semantic-ui-react';

const ScheduleListItem = ({ index, active, title, children, handleClick }) =>
    <Fragment>
        <Accordion.Title active={active === index} index={index} onClick={handleClick}>
            <Icon name="list layout" /> {title}
        </Accordion.Title>

        <Accordion.Content active={active === index}>
            {children}
        </Accordion.Content>
    </Fragment>
;

ScheduleListItem.propTypes = {
    index: number.isRequired,
    active: number.isRequired,
    title: string.isRequired,
    children: node.isRequired,
    handleClick: func.isRequired
};

export default ScheduleListItem;

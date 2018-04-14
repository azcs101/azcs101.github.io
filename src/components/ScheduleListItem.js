import React, { Fragment } from 'react';
import { string, number, node, func, shape } from 'prop-types';

import { Accordion, Icon, Transition, Grid, Button } from 'semantic-ui-react';

const ScheduleListItem = ({ index, links, active, title, date, children, handleClick }) =>
    <Fragment>
        <Accordion.Title active={active === index} index={index} onClick={handleClick}>
            <Grid>
                <Grid.Column width={5}>
                    <Icon name="list layout" /> {title}
                </Grid.Column>
                <Grid.Column floated="right" textAlign="right">
                    {date}
                </Grid.Column>
            </Grid>
        </Accordion.Title>

        <Accordion.Content active={active === index}>
            <p>{children}</p>

            <Button
                as="a"
                href={links.slides}
                target="_blank"
                rel="external"
                icon 
                color="green"
                labelPosition="left"
                disabled={!links.slides}
            >
                <Icon name="download" /> Slides
            </Button>

            <Button
                as="a"
                href={links.source}
                target="_blank"
                rel="external"
                icon
                color="blue"
                labelPosition="left"
                disabled={!links.source}
            >
                <Icon name="code" /> Source Code
            </Button>
        </Accordion.Content>
    </Fragment>
;

ScheduleListItem.propTypes = {
    index: number.isRequired,
    active: number.isRequired,
    title: string.isRequired,
    date: string.isRequired,
    children: node.isRequired,
    handleClick: func.isRequired,
    links: shape({
        slides: string,
        source: string
    })
};

ScheduleListItem.defaultProps = {
    links: {
        slides: null,
        source: null
    }
};

export default ScheduleListItem;

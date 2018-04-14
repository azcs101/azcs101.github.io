import React from 'react';
import { string, node } from 'prop-types';

import { Grid, Header } from 'semantic-ui-react';

const Page = ({ children, title }) => 
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Header as="h1" dividing>{title}</Header>
            </Grid.Column>
        </Grid.Row>

        {children}
    </Grid>
;

Page.propTypes = {
    title: string.isRequired,
    children: node
};

export default Page;

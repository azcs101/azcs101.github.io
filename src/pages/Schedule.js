import React from 'react';

import { Page } from '../layouts';

import { Grid } from 'semantic-ui-react';
import ScheduleList from '../components/ScheduleList';

import scheduleData from '../data/schedule.json';

const Schedule = () =>
    <Page title="Schedule">
        <Grid.Row>
            <Grid.Column>
                <ScheduleList data={scheduleData} />
            </Grid.Column>
        </Grid.Row>
    </Page>
;

export default Schedule;

import React from 'react';

import { Page } from '../layouts';
import { Grid } from 'semantic-ui-react';
import AnnouncementsFeed from '../components/AnnouncementsFeed';

import announcementsData from '../data/announcements.json';

const Announcements = () =>
    <Page title="Announcements">
        <Grid.Row>
            <Grid.Column>
                <AnnouncementsFeed data={announcementsData} />
            </Grid.Column>
        </Grid.Row>
    </Page>
;

export default Announcements;

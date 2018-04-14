import React, { Component } from 'react';
import { string, arrayOf, shape } from 'prop-types';

import { Feed, Icon } from 'semantic-ui-react';

const AnnouncementsFeed = ({ data }) =>
    <Feed size="large">
        {data.map((item, i) =>
            <Feed.Event key={i}>
                <Feed.Label>
                    <Icon name={item.icon} />
                </Feed.Label>
                <Feed.Content>
                    <Feed.Summary>
                        <Feed.User>{item.user}</Feed.User> {item.summary}
                        <Feed.Date>{item.date}</Feed.Date>
                    </Feed.Summary>
                    {item.content && <Feed.Extra text>{item.content}</Feed.Extra>}
                </Feed.Content>
            </Feed.Event>
        )}
    </Feed>
;

AnnouncementsFeed.propTypes = {
    data: arrayOf(shape({
        icon: string.isRequired,
        user: string.isRequired,
        date: string.isRequired,
        summary: string.isRequired,
        content: string
    }))
};

AnnouncementsFeed.defaultProps = {
    data: []
};

export default AnnouncementsFeed;

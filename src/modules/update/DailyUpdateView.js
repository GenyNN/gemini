import React, {PropTypes, Component} from "react";
import {StyleSheet, TouchableOpacity, Image, Text, View, Dimensions, ScrollView} from "react-native";
import Page from '../../components/Page/Page'
import PageCoverRune from '../../components/Page/PageCoverRune'
import {getInitClient} from '../../utils/contentful'
import {actionAddRunes} from '../contentful/ContentfulState'
import store from '../../redux/store'


export default class DailyUpdateView extends Component {

    static announcement = {
        title: `Mannaz`,
        description: `Yes, but ensure that those who you care about known that this is so.`
    };

    static title = `RUNE\nOF THE DAY`

    static description = [{
        title: `Meaning`,
        description: `Yes, but ensure that those who you care about known that this is so.`
    }, {
        title: `Meaning`,
        description: `According to the US Geological Survey, a 5.3 magnitude explos ion” has been detected in North Korea near the country’s only known nuclear test site. North Korea has claimed to have tested nuclear weapons after similar seismic activity in recent years, but none as large as today’s event.`
    }]

    componentWillMount() {
        const client = getInitClient()
        client.getEntries({content_type: 'runes'})
            .then(function (entries) {
                store.dispatch(actionAddRunes(entries));
            })
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Page
                coverComponent={<PageCoverRune />}
                announcement={DailyUpdateView.announcement}
                title={DailyUpdateView.title}
                description={DailyUpdateView.description}
            />
        );
    }
}
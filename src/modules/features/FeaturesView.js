import React, {PropTypes, Component} from "react";
import {StyleSheet, TouchableOpacity, Image, Text, View, ListView} from "react-native";
import FeatureMenuItem from "../../components/FeatureMenuItem";
import TopNavBar from '../../components/TopNavBar'

let features = [
    {
        title: "LINE OF FATE",
        text: "Check yours or even your match graph",
        key: "fate",
        isFree: true
    },
    {
        title: "ZODIAC",
        text: "Check your sign and see how you match with your lover!",
        key: "zodiac",
        isFree: true
    },
    {
        title: "NAME",
        titleSecond: "NUMEROLOGY",
        text: "Your number is 11",
        key: "numerology",
        isFree: true
    },
    {
        title: "WEEKLY TEST",
        text: "Every monday morning check for our new fun test!",
        key: "test",
        isFree: false
    },
    {
        title: "DAILY UPDATE",
        text: "Every monday morning check for your new update",
        key: "update",
        isFree: false
    }
]

export default class FeaturesView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(features)
        };
    }

    renderRow = (rowData) => {
        return (
            <View>
                <View>
                    <FeatureMenuItem key={rowData.title} feature={rowData}
                                     action={this.props.pushRoute.bind(this, {key: rowData.key, title: rowData.title})}/>
                </View>
                <View style={{marginTop: 10, borderBottomColor:'#FFFFFF', borderBottomWidth: 0.3}}/>
            </View>
        );
    }

    render() {
        return (
            <Image source={require('../../../images/mainScreen/background_static@3x.png')}
                   style={styles.backgroundImage}>
                <View style={styles.backdropView}>
                    <TopNavBar />
                    <ListView dataSource={this.state.dataSource} renderRow={this.renderRow}/>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    backdropView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    navigationBar: {
        flex: 1,
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row'
    },
    backBtn: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0)',
        bottom: 0,
        padding: 5
    }
});
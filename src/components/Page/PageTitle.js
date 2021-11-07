import React, {PropTypes} from "react";
import {View, Text} from "react-native";
import fonts from '../../utils/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class PageTitle extends React.Component {
    static propTypes = {
        title: PropTypes.string
    };

    static styles = EStyleSheet.create({
        text: {
            paddingHorizontal: 21,
            fontSize: 46,
            lineHeight: 44,
            letterSpacing: -4,
            ...fonts[900],
            color: 'white'
        },
        viewStyle: {
            backgroundColor: 'rgba(0,0,0,0)'
        }
    });

    render() {
        return (
            <View style={PageTitle.styles.viewStyle}>
                <Text style={PageTitle.styles.text}>{this.props.title}</Text>
            </View>
        )
    }
}


import React from "react";
import {View, Image} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import {BACKGROUND} from '../../images';
import TopNavBar from './TopNavBar';

export default class PageWrapper extends React.Component {

    static styles = EStyleSheet.create({
        containerStyle: {
            flexDirection: 'column',
            flex: 1
        },
        backgroundStyle: {
            position: 'absolute',
            left: 0,
            top: 0
        },
    });

    render() {
        const {containerStyle, backgroundStyle} = PageWrapper.styles;

        return (
            <View style={containerStyle}>
                <View>
                    <Image source={BACKGROUND} style={backgroundStyle}/>
                    <TopNavBar />
                </View>
                {this.props.children}
            </View>
        )
    };
}

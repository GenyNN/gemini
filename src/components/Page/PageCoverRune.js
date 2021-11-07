import React, {PropTypes} from "react";
import {View, Image} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export default class PageCoverRune extends React.Component {

    static styles = EStyleSheet.create({
        rune: {
            flexDirection: 'column',
            minHeight: (300),
        },
        runeImage: {
            resizeMode: 'contain',
            zIndex: 1,
            width: null,
            height: null,
            flexGrow: 1,
        }

    });

    render() {
        return (
            <View style={PageCoverRune.styles.rune}>
                <Image source={require('../../../images/update/rune@3x.png')} style={PageCoverRune.styles.runeImage}/>
            </View>
        )
    }
}





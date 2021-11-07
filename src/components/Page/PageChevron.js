import React, {PropTypes} from "react";
import {View, Image, TouchableOpacity} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import {CHEVRON_UP, CHEVRON_DOWN} from '../../../images';

export default class PageChevron extends React.Component {
    static propTypes = {
        upArrow: PropTypes.bool,
        onPress: PropTypes.func
    };

    static styles = EStyleSheet.create({
        chevron: {
            minHeight: 40,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'transparent'
        }
    });


    render() {
        const imageSource = this.props.upArrow ? CHEVRON_UP : CHEVRON_DOWN;

        return (
            <View style={PageChevron.styles.chevron}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Image source={imageSource}/>
                </TouchableOpacity>
            </View>
        )
    };
}

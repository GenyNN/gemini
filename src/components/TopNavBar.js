import React, {Component} from "react";
import {connect} from "react-redux";
import {TouchableOpacity, Image, View} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import {popRoute} from "../modules/navigation/NavigationState";
import {BACK_ICON, HEADER_LOGO} from '../../images';

class TopNavBar extends Component {


    static styles = EStyleSheet.create({
        containerStyle: {
            zIndex: 1,
            flexDirection: 'row',
            top: 0,
            left: 0,
            right: 0,
            maxHeight: 40,
            minHeight: 40,
            width: '100%',
            backgroundColor: 'transparent',
            alignItems: 'center'
        },
        logoStyle: {
            flexGrow: 1,
            resizeMode: 'contain',
        },
        backStyle: {
            position: 'absolute',
            top: 0,
            left: 0,
            paddingTop: 0,
            zIndex: 1,
        },
        backImageStyle: {}
    });

    render() {
        const {logoStyle, containerStyle, backImageStyle, backStyle}=TopNavBar.styles;
        const {popRoute} = this.props;
        return (
            <View style={containerStyle}>
                <Image source={HEADER_LOGO} style={logoStyle}/>
                <TouchableOpacity style={backStyle} onPress={popRoute}>
                    <Image source={BACK_ICON} style={backImageStyle}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(state => ({}), {popRoute})(TopNavBar);
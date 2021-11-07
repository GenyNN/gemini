import React, {PropTypes} from "react";
import {View, StyleSheet, ActivityIndicator, Dimensions} from "react-native";
import NavigationViewContainer from "./navigation/NavigationViewContainer";
import DeveloperMenu from "../components/DeveloperMenu";
import EStyleSheet from 'react-native-extended-stylesheet';

const AppView = React.createClass({
    render() {
        return (
            <View style={{flex: 1}}>
                <NavigationViewContainer />
                {__DEV__ && <DeveloperMenu />}
            </View>
        );
    }
});

const {width} = Dimensions.get('window');
let rem = 15.4
if (width > 400) {
  rem = 19.9
} else if (width > 340) {
  rem = 18
}

EStyleSheet.build({
  rem: rem,
});

export default AppView;

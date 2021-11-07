import React, {PropTypes, Component} from "react";
import TopNavBar from "../../components/TopNavBar"
import {StyleSheet, TouchableOpacity, Image, Text, View, ListView} from "react-native";

export default class FateLineView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image source={require('../../../images/mainScreen/background_static@3x.png')}
                   style={styles.backgroundImage}>
                <View style={{flex:1}}>
                    <TopNavBar/>
                    <View style={styles.backdropView}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Line of fate</Text>
                    </View>
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
        backgroundColor: 'rgba(0,0,0,0)'
    }
});
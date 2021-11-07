import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image, ListView} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';

export default class ProgressBar extends Component {

    render() {
        return (
                <TouchableOpacity style={styles.container}>
                    <View>
                        {(() => {
                            let total = this.props.total;
                            let passed = this.props.passed;
                            let passedPercents = (passed * 100)/total;
                            let percentsValue = passedPercents +"%";
                            const styles = EStyleSheet.create({
                                progress: {
                                    height: 14,
                                    width: percentsValue,
                                    backgroundColor: '#43B77A'
                                }
                            });
                            return <View style={styles.progress}/>;
                        })()}
                    </View>
                </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0
    }
});
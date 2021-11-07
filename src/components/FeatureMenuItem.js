import React, {PropTypes, Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";

class FeatureMenuItem extends Component {

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.action}
                style={[styles.featureItem]}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{flex: 1, height: 215, flexDirection: 'row', padding: 20}}>
                        <View style={{width: 80, height: 165, flex: 1, flexDirection: 'row'}}>
                            {(() => {
                                switch (this.props.feature.key) {
                                    case "fate":
                                        return <Image style={{width: 123, height: 165, flex:1}}
                                                      source={require('../../images/features/line_of_fate.png')}/>;
                                    case "zodiac":
                                        return <Image style={{width: 123, height: 165}}
                                                      source={require('../../images/features/zodiac.png')}/>;
                                    case "numerology":
                                        return <Image style={{width: 123, height: 165}}
                                                      source={require('../../images/features/name_numerology.png')}/>;
                                    case "test":
                                        return <Image style={{width: 123, height: 165}}
                                                      source={require('../../images/features/weekly_test.png')}/>;
                                    case "update":
                                        return <Image style={{width: 123, height: 165}}
                                                      source={require('../../images/features/daily_update.png')}/>;
                                }
                            })()}
                        </View>
                        <View style={{width: 170, height: 155, paddingTop: 20, flex: 1, flexDirection: 'column'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 46}}>{this.props.feature.title}</Text>
                            {(() => {
                                if (this.props.feature.titleSecond != undefined) {
                                    return <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>{this.props.feature.titleSecond}</Text>
                                }
                            })()}
                            <Text style={{color: '#BAB0BD', paddingTop: 10, flexWrap: 'wrap'}}>{this.props.feature.text}</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
                        <View style={{height: 22, paddingLeft: 143}}>
                            {(() => {
                                switch (this.props.feature.key) {
                                    case "fate":
                                    case "test":
                                    case "update":
                                        return <Image style={{width: 22, height: 22}}
                                                      source={require('../../images/features/one.png')}/>;
                                    case "zodiac":
                                    case "numerology":
                                        return <Image style={{width: 44, height: 22}}
                                               source={require('../../images/features/two.png')}/>;
                                }
                            })()}

                        </View>

                        <View style={{height: 52, paddingLeft: 14}}>
                            {(() => {
                                switch (this.props.feature.key) {
                                    case "test":
                                    case "update":
                                        return <Image style={{width: 62, height: 22}} source={require('../../images/features/0.99.png')}/>;
                                    default:
                                        return <Image style={{width: 62, height: 22}} source={require('../../images/features/free.png')}/>;
                                }
                            })()}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

FeatureMenuItem.propTypes = {
    feature: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    featureItem: {
        flex: 1
    }
});
export default FeatureMenuItem

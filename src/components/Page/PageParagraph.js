import React, {PropTypes} from "react";
import {View, Text} from "react-native";
import fonts from '../../utils/fonts';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class PageParagraph extends React.Component {
    static propTypes = {
        paragraph: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        })
    };

    static styles = EStyleSheet.create({
        viewStyle: {
            marginTop: 15,
            backgroundColor: 'rgba(0,0,0,0)'
        },
        titleStyle: {
            fontSize: 20,
            letterSpacing: -1,
            ...fonts[900],
            color: 'white',
            marginBottom: 15,
            paddingHorizontal: 21
        },
        descriptionStyle: {
            flexGrow: 1,
            fontSize: 20,
            letterSpacing: -1,
            ...fonts[300],
            color: 'white',
            paddingHorizontal: 21
        }
    });

    render() {
        const {title, description}=this.props.paragraph;
        const {titleStyle, descriptionStyle, viewStyle}=PageParagraph.styles

        return (
            <View style={viewStyle}>
                <Text style={titleStyle}>{title}</Text>
                <Text style={descriptionStyle}>{description}</Text>
            </View>
        )
    }
}


import React, {PropTypes} from "react";
import {View} from "react-native";
import PageParagraph from './PageParagraph';

export default class PageDescription extends React.Component {
    static propTypes = {
        description: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string
            })
        )
    };

    _renderDescription() {
        return this.props.description.map((item, key)=><PageParagraph key={key} paragraph={item}/>)
    }

    render() {
        return (
            <View>{this._renderDescription()}</View>
        )
    }
}





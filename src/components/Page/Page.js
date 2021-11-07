import React, {PropTypes} from "react";
import {View, ScrollView, Dimensions, TouchableOpacity} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet';
import PageChevron from './PageChevron';
import PageDescription from './PageDescription';
import PageParagraph from './PageParagraph';
import PageWrapper from '../PageWrapper';
import PageTitle from './PageTitle';

export default class Page extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        announcement: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string
        }),
        description: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string,
                description: PropTypes.string
            })
        ),
        coverComponent: PropTypes.any
    };

    static styles = EStyleSheet.create({
        containerStyle: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
            flexGrow: 1
        },
    });


    constructor(props) {
        super(props);

        this.state = {
            chevronVisible: true,
            marginPageDescription: 0,
            visibleTitlePage: true
        };
    };

    getTogglePage() {
        const model = this;
        return function () {
            const visibleTitlePage = !model.state.visibleTitlePage;
            model.setState({visibleTitlePage});
        }
    }

    _getFirstPage() {
        const {coverComponent, title, announcement}=this.props;

        return (
            <PageWrapper>
                <View style={Page.styles.containerStyle}>
                    {coverComponent}
                    <PageTitle title={title}/>
                    <PageParagraph paragraph={announcement}/>
                    <PageChevron upArrow={false} onPress={this.getTogglePage.bind(this)()}/>
                </View>

            </PageWrapper>
        )
    }

    _getSecondPage() {
        const {title, description}=this.props;

        return (
            <PageWrapper>
                <PageChevron upArrow={true} onPress={this.getTogglePage.bind(this)()}/>

                <ScrollView automaticallyAdjustContentInsets={false}
                            scrollEventThrottle={200}>

                    <PageTitle title={title}/>
                    <PageDescription description={description}/>

                </ScrollView>
            </PageWrapper>
        )
    }

    render() {
        return this.state.visibleTitlePage ? this._getFirstPage() : this._getSecondPage()
    };
}


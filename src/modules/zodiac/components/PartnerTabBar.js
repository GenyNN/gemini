import React, {PropTypes, Component} from "react";
import {StyleSheet, View, Image, TouchableOpacity, Text, Animated} from "react-native";
import { DefaultTabBar } from 'react-native-scrollable-tab-view'
import EStyleSheet from 'react-native-extended-stylesheet';
import { HIGHLIGHT_SMALL, HIGHLIGHT_BIG } from '../../../../images'
import Fonts from '../../../utils/fonts'


const styles = EStyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: '5%',
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    marginTop: '10%',
    backgroundColor: 'rgba(0,0,0,0)',
    marginLeft: '5%',
    marginRight: '10%'
  },
  imageSyleSmall: {
    width: '6.5rem',
    height: '0.56rem',
    marginLeft: '4%'
  },
  imageSyleBig: {
    width: '8rem',
    height: '0.68rem'
  },
  tabUnderlineStyle: {
    height: '0.3rem',
    position: 'absolute',
    bottom: 0,
  }
})

export default class PartnerTabBar extends Component {
  static propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: View.propTypes.style,
  };

  static defaultProps = () => {
    return {
      activeTextColor: 'white',
      inactiveTextColor: 'white',
      backgroundColor: null,
    };
  };

  renderTab = (name, page, isTabActive, onPressHandler) => {
    const { activeTextColor, inactiveTextColor, textStyle, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return (
      <TouchableOpacity
        style={{flex: 1, }}
        key={name}
        accessible={true}
        accessibilityLabel={name}
        accessibilityTraits='button'
        onPress={() => onPressHandler(page)}
      >
        <View style={[styles.tab, this.props.tabStyle, ]}>
          <Text style={[{color: 'white'}, Fonts[900]]}>
            {name}
          </Text>
        </View>
      </TouchableOpacity>
    )
  };

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    let renderHighlight = <Image source={HIGHLIGHT_SMALL} style={styles.imageSyleSmall}/>
    if (this.props.activeTab === 1)
      renderHighlight = <Image source={HIGHLIGHT_BIG} style={styles.imageSyleBig}/>

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });
    return (
      <View style={[styles.tabs, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View style={[styles.tabUnderlineStyle, { left, }, this.props.underlineStyle, ]}>
          {renderHighlight}
        </Animated.View>
      </View>
    );
  }
}
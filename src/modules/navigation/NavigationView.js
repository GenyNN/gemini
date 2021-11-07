import React, {PropTypes} from 'react';
import {
  NavigationExperimental,
  View,
  Platform,
  StyleSheet
} from 'react-native';
const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;
import AppRouter from '../AppRouter';
import TabBar from '../../components/TabBar';

// Height duplicated from React Native NavigationHeader components
const APP_BAR_HEIGHT = Platform.OS === 'ios' ? 64 : 56;
// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 50;

const NavigationView = React.createClass({
  propTypes: {
    onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func.isRequired,
    navigationState: PropTypes.shape({
      tabs: NavigationPropTypes.navigationState.isRequired,
      HomeTab: NavigationPropTypes.navigationState.isRequired,
      FeaturesTab: NavigationPropTypes.navigationState.isRequired
    }),
    switchTab: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired
  },
  // NavigationHeader accepts a prop style
  // NavigationHeader.title accepts a prop textStyle
  renderHeader(sceneProps) {
    return (
      <NavigationHeader
        {...sceneProps}
        onNavigateBack={this.props.onNavigateBack}
        renderTitleComponent={() => {
          return (
            <NavigationHeader.Title>
              {sceneProps.scene.route.title}
            </NavigationHeader.Title>
          );
        }}
      />
    );
  },
  renderScene(sceneProps) {
    // render scene and apply padding to cover
    // for app bar and navigation bar
    return AppRouter(sceneProps)
  },
  render() {
    const {tabs} = this.props.navigationState;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = this.props.navigationState[tabKey];
    return (
        <NavigationCardStack
          key={'stack_' + tabKey}
          onNavigateBack={this.props.onNavigateBack}
          navigationState={scenes}
          renderOverlay={this.renderHeader}
          renderScene={this.renderScene}
        />
    );
  }
});

export default NavigationView;

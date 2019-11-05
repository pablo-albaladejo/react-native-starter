import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Pallete, STYLE_LEVEL } from '../../styles';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: Pallete[STYLE_LEVEL.PRIMARY] }]} />
);

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: Pallete[STYLE_LEVEL.SECONDARY] }]} />
);

export default class TabsScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
    ],
  };

  render() {
    return (
      <TabView
        renderTabBar={props =>
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Pallete[STYLE_LEVEL.WARNING] }}
            style={{ backgroundColor:  Pallete[STYLE_LEVEL.INFO] }}
            labelStyle={{color: Pallete[STYLE_LEVEL.DANGER]}}
          />
        }
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

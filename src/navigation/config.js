export const navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index == 0,
  }
};

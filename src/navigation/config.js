import { STYLE_LEVEL, Pallete } from "../styles";

export const navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index == 0,
  }
};

export const bottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: Pallete[STYLE_LEVEL.PRIMARY],
    inactiveTintColor: Pallete[STYLE_LEVEL.SECONDARY]
  }
};

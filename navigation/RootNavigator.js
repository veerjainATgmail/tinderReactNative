import React from "react";
import { createStackNavigator } from "react-navigation";
import createMaterialTopTabNavigator from "./TabNavigator.js";

const RootStack = createStackNavigator({
  Main: {
    screen: createMaterialTopTabNavigator,
  },
});

export default class RootNavigator extends React.Component {
  render() {
    return <RootStack />;
  }
}

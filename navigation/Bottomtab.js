import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Baemin from "../screentest/Baemin";
import Toco from "../screentest/Toco";
import Home from "../screentest/1Home";
import Epass from "../screentest/Epass";
import Epass_main from "../screentest/Epass_main";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
};

export default MainNavigator;

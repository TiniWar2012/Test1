import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Hung_Home from "./../Screens/Hung_Home";
import Order from "./../Screens/Order";
import DM_User from "./../Screens/DM_User";
import DM_Catalog from "./../Screens/DM_Catalog";

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hung_Home" component={Hung_Home} />
      <Tab.Screen name="DM_Catalog" component={DM_Catalog} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="User" component={DM_User} />
    </Tab.Navigator>
  );
}
const TabNavigator = () => {
  return (
    <NavigationContainer>
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
};

export default TabNavigator;

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import Baemin from "../screentest/Baemin";
// import Toco from "../screentest/Toco";
// import Home from "../screentest/1Home";
// import Epass from "../screentest/Epass";
// import Epass_main from "../screentest/Epass_main";
// import Hung_TrangChu from "./../Screens/Hung_Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Hung_Home from "./../Screens/Hung_Home";
import Order from "./../Screens/Order";
import DM_User from "./../Screens/DM_User";
import DM_Catalog from "./../Screens/DM_Catalog";

// const Stack = createStackNavigator();

// function StackNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Hung_Home" component={Hung_Home} />
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Baemin" component={Baemin} />
//       <Stack.Screen name="Toco" component={Toco} />
//       <Stack.Screen name="ePass" component={Epass} />
//       <Stack.Screen name="ePass_main" component={Epass_main} />
//     </Stack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Trang chủ" component={Hung_Home} />
      <Tab.Screen name="Danh mục" component={DM_Catalog} />
      <Tab.Screen name="Đơn hàng" component={Order} />
      <Tab.Screen name="Cá nhân" component={DM_User} />
    </Tab.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator></StackNavigator> */}
      <MyTabs></MyTabs>
    </NavigationContainer>
  );
};

export default MainNavigator;

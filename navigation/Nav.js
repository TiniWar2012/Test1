import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  FontAwesome,
  Feather,
  SimpleLineIcons,
  AntDesign,
  Ionicons,
  MaterialIcons,
  EvilIcons,
  Entypo,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
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
import Home from "./../screentest/1Home";
import Baemin from "./../screentest/Baemin";
import Epass from "./../screentest/Epass";
import Toco from "./../screentest/Toco";
import Epass_main from "./../screentest/Epass_main";
import Hung_Map from "./../Screens/Hung_Map";
import "react-native-gesture-handler";
import DM_Cart from "./../Screens/DM_Cart";
import Hung_ProductDetail from "./../Screens/Hung_ProductDetail";
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Baemin" component={Baemin} />
      <Stack.Screen name="Toco" component={Toco} />
      <Stack.Screen name="ePass" component={Epass} />
      <Stack.Screen name="ePass_main" component={Epass_main} /> */}
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Hung_Home" component={Hung_Home} />
      <Stack.Screen name="DM_Catalog" component={DM_Catalog} />
      <Stack.Screen name="DM_User" component={DM_User} />
      <Stack.Screen name="DM_Cart" component={DM_Cart} />
      <Stack.Screen name="Hung_ProductDetail" component={Hung_ProductDetail} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Hung_Map" component={Hung_Map} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Trang ch???"
        component={Hung_Home}
        options={{
          tabBarIcon: () => <AntDesign name="home" color={"gray"} size={25} />,
        }}
      />
      <Tab.Screen
        name="Danh m???c"
        component={DM_Catalog}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="pills" color={"gray"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="????n h??ng"
        component={Order}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="file-invoice-dollar" color={"gray"} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="C?? nh??n"
        component={DM_User}
        options={{
          tabBarIcon: () => <EvilIcons name="user" color={"gray"} size={40} />,
        }}
      />
    </Tab.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
      {/* <MyTabs></MyTabs> */}
    </NavigationContainer>
  );
};

export default MainNavigator;

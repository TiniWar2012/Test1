import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Baemin from "../screentest/Baemin";
import Toco from "../screentest/Toco";
import Home from "../screentest/1Home";
import Epass from "../screentest/Epass";
import Epass_main from "../screentest/Epass_main";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Baemin" component={Baemin} />
      <Stack.Screen name="Toco" component={Toco} />
      <Stack.Screen name="ePass" component={Epass} />
      <Stack.Screen name="ePass_main" component={Epass_main} /> */}
      
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

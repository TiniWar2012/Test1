import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from "react-native";
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
} from "@expo/vector-icons";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DM_Catalog from "./DM_Catalog";
import Order from "./Order";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Hung_Home" component={Hung_Home} />
      <Tab.Screen name="DM_Catalog" component={DM_Catalog} />
      <Tab.Screen name="Order" component={Order} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}

export default class Hung_Home extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView></ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});

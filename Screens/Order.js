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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Hung_Home from "./Hung_Home";
import DM_Catalog from "./DM_Catalog";
import DM_User from "./DM_User";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

export default class Order extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.header_viewtitle}>
            <Text style={styles.header_title}>Lịch sử đơn hàng</Text>
          </View>
          <View>
            <Ionicons
              name="md-filter-outline"
              color={"white"}
              size={25}
              style={styles.header_viewiconfilter}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0F62F9",
    flexDirection: "row",
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  header_viewtitle: {},
  header_viewiconfilter: {
    marginRight: 10,
  },
  header_title: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
  },
  header_iconfilter: {},
});

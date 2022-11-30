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
// import BouncyCheckbox from "react-native-bouncy-checkbox";
const Tab = createMaterialTopTabNavigator();
// import { CheckBox } from "@rneui/themed";

export default class Order extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
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
          <View style={styles.body}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.navSlideTop}>
                <Text>Tất cả</Text>
              </View>
              <View style={styles.navSlideTop}>
                <Text>Chờ xác nhận</Text>
              </View>
              <View style={styles.navSlideTop}>
                <Text>Đang xử lý</Text>
              </View>
              <View style={styles.navSlideTop}>
                <Text>Đang giao</Text>
              </View>
              <View style={styles.navSlideTop}>
                <Text>Đã giao thành công</Text>
              </View>
              <View style={styles.navSlideTop}>
                <Text>Đã hủy</Text>
              </View>
            </ScrollView>
            <ScrollView style={styles.allOrder}>
              <View style={styles.search}>
                <Ionicons name="ios-search-outline" color={"gray"} size={25} />
                <TextInput placeholder="Nhập tên sản phẩm, nhà thuốc, địa chỉ, mã đơn..." />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0F62F9",
  },
  body: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
  },
  header: {
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
  navSlideTop: {
    padding: 13,
    // borderBottomWidth: 2,
    // borderColor: "#003CBF",
  },
  allOrder: {
    padding: 15,
    backgroundColor: "#ffffff",
  },
  search: {
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
});

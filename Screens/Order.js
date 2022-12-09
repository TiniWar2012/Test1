import React, { Component, useState } from "react";
import {
  Text,
  StyleSheet,
  StatusBar,
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
import { FlatList, Switch } from "react-native-gesture-handler";
import { color } from "@rneui/base";
import { Pressable } from "react-native";
import { onPress } from "deprecated-react-native-prop-types/DeprecatedTextPropTypes";
import { Modal } from "react-native-paper";
// import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Order() {
  const [Id, setId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => <Item {...item} />;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar show />
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
        {/* Status Invoice */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Pressable
            style={styles.navSlideTop}
            onPress={() => {
              setId(1);
              setModalVisible(true);
            }}
          >
            <Text>Tất cả</Text>
          </Pressable>
          <TouchableOpacity style={styles.navSlideTop}>
            <Text>Chờ xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navSlideTop} onPress={() => setId(3)}>
            <Text>Đang xử lý</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navSlideTop} onPress={() => setId(4)}>
            <Text>Đang giao</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navSlideTop} onPress={() => setId(5)}>
            <Text>Đã giao thành công</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navSlideTop} onPress={() => setId(6)}>
            <Text>Đã hủy</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  body: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    backgroundColor: "#0F62F9",
  },
  header_viewiconfilter: {
    marginRight: 10,
  },
  header_title: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
  },
  navSlideTop: {
    // padding: 10,
    // borderBottomWidth: 2,
    // borderColor: "#003CBF",
    height: 40,
    justifyContent: "center",
    marginRight: 20,
  },
  allOrder: {
    backgroundColor: "#ffffff",
  },
  search: {
    // display: "flex",
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 12,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: 8,
    marginTop: 10,
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginLeft: 10,
  },

  Bill: {
    marginTop: 20,
  },
  headerBill: {
    backgroundColor: "#c4dbff",
    borderColor: "#bac5d6",
    borderWidth: 0.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pnlstt: {
    backgroundColor: "#7acc60",
    borderRadius: 20,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 4,
    paddingTop: 4,
  },
  MainBill: {
    borderColor: "#bac5d6",
    borderWidth: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
const Item = ({ status, point, id, price, address_Store }) => (
  <View style={styles.Bill}>
    <View style={styles.headerBill}>
      <Text style={{ fontWeight: "bold", fontSize: 17 }}>
        Mua tại nhà thuốc
      </Text>
      <View style={styles.pnlstt}>
        <Text>Thành công</Text>
      </View>
    </View>
    {/*  */}
    <View style={styles.MainBill}>
      <Text>Điểm tích lũy: {point}</Text>
      <Text>Mã đơn hàng: {id}</Text>
      <Text>Giá trị đơn hàng {price}</Text>
      <Text>Mua tại nhà thuốc: {address_Store}</Text>
    </View>
  </View>
);
const DATA = [
  {
    status: "1",
    point: "1",
    id: "1",
    price: "1",
    address_Store: "1",
  },
  {
    status: "12",
    point: "12",
    id: "12",
    price: "12",
    address_Store: "12",
  },
  {
    status: "1ưeq2",
    point: "1dsada2",
    id: "1dsadsa2",
    price: "1ádasdsa2",
    address_Store: "1dsadas",
  },
  {
    status: "12ẻw",
    point: "1rew2",
    id: "1rưer2",
    price: "rưe2",
    address_Store: "1rưe2",
  },
];

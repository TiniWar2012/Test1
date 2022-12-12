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
const listTab = [
  {
    status: "Chờ xác nhận",
  },
  {
    status: "Đang xử lý",
  },
  {
    status: "Đang giao",
  },
  {
    status: "Hoàn thành",
  },
  {
    status: "Hủy",
  },
];
export default function Order() {
  const [status, setStatus] = useState("");
  const [datalList, setDatalList] = useState(DATA);
  const setStatusFilter = (status) => {
    if (status !== "") {
      setDatalList([...DATA.filter((e) => e.status === status)]);
    } else {
      setDatalList(DATA);
    }
    setStatus(status);
  };
  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.Bill}>
        <View style={styles.headerBill}>
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Mua tại nhà thuốc
          </Text>
          <View style={styles.pnlstt}>
            <Text>{item.status}</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.MainBill}>
          <Text>Điểm tích lũy: {item.point}</Text>
          <Text>Mã đơn hàng: {item.id}</Text>
          <Text>Giá trị đơn hàng {item.price}.000</Text>
          <Text>Mua tại nhà thuốc: {item.address_Store}</Text>
        </View>
      </View>
    );
  };

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
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.navSlide}
        >
          {listTab.map((e) => (
            <TouchableOpacity
              style={[
                styles.navSlideTop,
                status === e.status && styles.btnActive,
              ]}
              onPress={() => setStatusFilter(e.status)}
            >
              <Text
                style={[
                  styles.titleNav,
                  status === e.status && styles.textActive,
                ]}
              >
                {e.status}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.main}>
          <FlatList
            data={datalList}
            keyExtractor={(e, i) => i.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    padding: 20,
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
  body: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  navSlideTop: {
    height: 50,
    justifyContent: "center",
    marginHorizontal: 15,
  },
  titleNav: {
    color: "#AAAAAA",
    fontSize: 17,
  },
  btnActive: {
    // padding: 10,

    borderBottomWidth: 2,
    borderColor: "#003CBF",
  },
  textActive: {
    color: "#003CBF",
  },
  navSlide: {
    flex: 1,
  },
  main: {
    flex: 12,
  },
  Bill: {
    marginTop: 10,
    paddingHorizontal: 20,
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

const DATA = [
  {
    point: "1",
    id: "1",
    price: "145",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Chờ xác nhận",
  },
  {
    point: "120",
    id: "12",
    price: "129",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Chờ xác nhận",
  },
  {
    point: "100",
    id: "1dsaddda2",
    price: "245",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang xử lý",
  },
  {
    point: "100",
    id: "1rưer2",
    price: "516",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang xử lý",
  },
  {
    point: "100",
    id: "1dsadsa2",
    price: "357",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang xử lý",
  },
  {
    point: "100",
    id: "1rưe42342r2",
    price: "864",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang xử lý",
  },
  {
    point: "100",
    id: "1dsads4234a2",
    price: "110",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang xử lý",
  },
  {
    point: "100",
    id: "1rưe423423r2",
    price: "78",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang xử lý",
  },
  {
    point: "100",
    id: "1rưe423423r2",
    price: "78",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang xử lý",
  },
  {
    point: "100",
    id: "1123qwe12",
    price: "786",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang giao",
  },
  {
    point: "100",
    id: "1rưe42r2",
    price: "122",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Đang giao",
  },
  {
    point: "100",
    id: "ghsdg231",
    price: "1024",
    address_Store:
      "198 Phố Nguyễn Huy Tưởng, Phường Thanh Xuân Trung, Quận Thanh Xuân, Thành phố Hà Nội",
    status: "Hoàn thành",
  },
];

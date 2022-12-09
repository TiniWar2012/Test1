import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  FlatList,
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
import { style } from "deprecated-react-native-prop-types/DeprecatedImagePropType";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Hung_Map from "./Hung_Map";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Hung_Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <View style={styles.css}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/vietnam.png")}
          />
          <TextInput style={styles.input} placeholder="Tìm trên Pharmacity" />
          <SimpleLineIcons
            name="bell"
            style={{ fontSize: 20, color: "white" }}
          />
          <Feather
            name="shopping-cart"
            style={{ fontSize: 20, color: "white" }}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.sale}>
          <Image
            style={{ width: "100%", height: 80 }}
            source={require("../assets/anhbia2.png")}
          />
        </View>
        <View style={styles.maps}>
          <TouchableOpacity onPress={() => navigation.navigate("Hung_Map")}>
            <View style={styles.map}>
              <View style={styles.map_left}>
                <Image
                  style={{ width: 80, height: 50 }}
                  source={require("../assets/pmc-store-new.png")}
                />
                <Text style={styles.biggerText}>
                  1.030
                  <Text style={styles.baseText}> nhà thuốc trên toàn quốc</Text>
                </Text>
              </View>
              <AntDesign
                name="right"
                style={{ fontSize: 20, color: "white" }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.adv}>
          <FlatList
            horizontal={true}
            data={DATA1}
            renderItem={renderItem1}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.options}>
          <FlatList
            horizontal={true}
            data={DATA2}
            renderItem={renderItem2}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            horizontal={true}
            data={DATA3}
            renderItem={renderItem3}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.sanpham}>
          <Text style={{ fontSize: 20 }}>Danh mục sản phẩm</Text>
          <View style={styles.products}>
            {/* <FlatList
              horizontal={true}
              data={DATA4}
              renderItem={renderItem4}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
            <FlatList
              horizontal={true}
              data={DATA4}
              renderItem={renderItem4}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            /> */}
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/duocpham.png")}
                />
                <Text style={styles.font}>Dược phẩm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/cssk.png")}
                />
                <Text style={styles.font}>Chăm sóc sức khỏe</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/cscn.png")}
                />
                <Text style={styles.font}>Chăm sóc cá nhân</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/sptl.png")}
                />
                <Text style={styles.font}>Sản phẩm tiện lợi</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.products}>
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/tpcn.png")}
                />
                <Text style={styles.font}>Thực phẩm chức năng</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/tbyt.png")}
                />
                <Text style={styles.font}>Mẹ và Bé</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/cssd.png")}
                />
                <Text style={styles.font}>Chăm sóc sức đẹp</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity>
                <Image
                  style={styles.productimg}
                  source={require("../assets/tbyt.png")}
                />
                <Text style={styles.font}>Thiết bị y tế</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.qc}>
          <TouchableOpacity style={{ paddingVertical: 10 }}>
            <Image style={styles.evimg} source={require("../assets/ev8.png")} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: 10 }}>
            <Image
              style={{ width: 365, height: 140, borderRadius: 10 }}
              source={require("../assets/ev9.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: 10 }}>
            <Image
              style={styles.evimg}
              source={require("../assets/ev10.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.monthsale}>
          <View style={styles.box}>
            <Text style={styles.font1}>Tháng ưu đãi giảm đến 80%</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#003CBF" }}>Xem tất cả</Text>
              <AntDesign
                name="right"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#003CBF",
                  paddingLeft: 5,
                }}
              />
            </View>
          </View>
          <View style={styles.listsp}>
            <FlatList
              horizontal={true}
              data={DATA5}
              renderItem={renderItem5}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const DATA1 = [
  {
    id: 1,
    imgurl: require("../assets/ev1.png"),
  },
  {
    id: 2,
    imgurl: require("../assets/ev2.png"),
  },
  {
    id: 3,
    imgurl: require("../assets/ev3.png"),
  },
  {
    id: 4,
    imgurl: require("../assets/ev4.png"),
  },
  {
    id: 5,
    imgurl: require("../assets/ev5.png"),
  },
  {
    id: 6,
    imgurl: require("../assets/ev6.png"),
  },
  {
    id: 7,
    imgurl: require("../assets/ev7.png"),
  },
];
const DATA2 = [
  {
    id: 1,
    iconurl: require("../assets/coupon.png"),
    name: "Coupun của tôi",
  },
  {
    id: 2,
    iconurl: require("../assets/pill.png"),
    name: "Thẻ thành viên",
  },
  {
    id: 3,
    iconurl: require("../assets/chat.png"),
    name: "Tư vấn trực tuyến",
  },
];
const DATA3 = [
  {
    id: 1,
    iconurl: require("../assets/phone.png"),
    name: "Dược sĩ trực tuyến",
  },
  {
    id: 2,
    iconurl: require("../assets/notebook.png"),
    name: "Cẩm nang mua sắm",
  },
  {
    id: 3,
    iconurl: require("../assets/health.png"),
    name: "Cẩm nang sức khỏe",
  },
];
const DATA4 = [
  {
    id: 1,
    prdimg: require("../assets/duocpham.png"),
    name: "Dược phẩm",
  },
  {
    id: 2,
    prdimg: require("../assets/cssk.png"),
    name: "Chăm sóc sức khỏe",
  },
  {
    id: 3,
    prdimg: require("../assets/cscn.png"),
    name: "Chăm sóc cá nhân",
  },
  {
    id: 4,
    prdimg: require("../assets/sptl.png"),
    name: "Sản phẩm tiện lợi",
  },
];
const DATA5 = [
  {
    id: 1,
    discount: "-70%",
    imgurl: require("../assets/sp1.png"),
    name: "Viên hỗ trợ khớp Stada ArthroStop Intensive",
    oldprice: "395.000đ",
    price: "118.500đ/Hộp",
  },
  {
    id: 2,
    discount: "-70%",
    imgurl: require("../assets/sp2.jpg"),
    name: "Thực phẩm bảo vệ sức khỏe giảm rối loạn chức năng gan",
    oldprice: "210.000đ",
    price: "63.000đ/Hộp",
  },
  {
    id: 3,
    discount: "-70%",
    imgurl: require("../assets/sp1.png"),
    name: "Viên hỗ trợ khớp Stada ArthroStop Intensive",
    oldprice: "395.000đ",
    price: "118.500đ/Hộp",
  },
];
const renderItem1 = ({ item }) => (
  <View>
    <Image style={styles.sizeimg} source={item.imgurl} />
  </View>
);
const renderItem2 = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.boxicon}>
      <Image style={styles.sizeicons} source={item.iconurl} />
      <Text style={styles.texticon}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);
const renderItem3 = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.boxicon}>
      <Image style={styles.sizeicons} source={item.iconurl} />
      <Text style={styles.texticon}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);
const renderItem4 = ({ item }) => (
  <TouchableOpacity>
    <View style={styles.boxprd}>
      <Image style={styles.productimg} source={item.prdimg} />
      <Text style={styles.texticon}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);
const renderItem5 = ({ item }) => (
  <TouchableOpacity style={styles.row}>
    <View style={styles.dsc}>
      <Text
        style={{
          color: "white",
          borderRadius: 50,
          backgroundColor: "red",
          paddingHorizontal: 10,
        }}
      >
        {item.discount}
      </Text>
    </View>
    <View style={styles.prdcontent}>
      <Image style={styles.imgsp} source={item.imgurl} />
      <Text numberOfLines={2} ellipsizeMode="tail">
        {item.name}
      </Text>
      <Text style={styles.font2}>{item.oldprice}</Text>
      <Text style={styles.font3}>{item.price}</Text>
      <View style={styles.btnadd}>
        <TouchableOpacity style={styles.btnadd}>
          <Text style={styles.font4}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  maps: {},
  map: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 15,
    backgroundColor: "blue",
    borderColor: "blue",
    margin: 5,
  },
  map_left: {
    flexDirection: "row",
    alignItems: "center",
  },
  baseText: {
    fontSize: 15,
  },
  biggerText: {
    fontSize: 20,
    color: "white",
  },
  sizeimg: {
    borderRadius: 10,
    margin: 5,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    width: "70%",
    borderRadius: 10,
    borderColor: "white",
    backgroundColor: "white",
  },
  header: {
    display: "flex",
    backgroundColor: "#0F62F9",
  },
  css: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    justifyContent: "space-evenly",
  },
  sizeicons: {
    width: 55,
    height: 55,
    margin: 10,
  },
  boxicon: {
    marginHorizontal: 30,
    alignItems: "center",
    width: 70,
  },
  texticon: {
    textAlign: "center",
  },
  productimg: {
    width: 80,
    height: 80,
  },
  boxprd: {
    alignItems: "center",
  },
  products: {
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    width: 75,
  },
  productdeltails: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  sanpham: {
    marginHorizontal: 15,
  },
  font: {
    textAlign: "center",
  },
  qc: {
    marginHorizontal: 15,
  },
  evimg: {
    width: 365,
    height: 115,
    borderRadius: 10,
  },
  monthsale: {
    paddingTop: 10,
    marginHorizontal: 15,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dsc: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  imgsp: {
    width: 145,
    height: 145,
  },
  row: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    width: 160,
    flexDirection: "column",
    marginRight: 5,
    padding: 5,
    marginTop: 10,
  },
  font1: {
    fontSize: 15,
  },
  font2: {
    textDecorationLine: "line-through",
    color: "gray",
    fontSize: 10,
  },
  font3: {
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
  },
  font4: {
    textAlign: "center",
    color: "white",
    fontSize: 10,
  },
  btnadd: {
    borderWidth: 1,
    borderColor: "#5DAC46",
    backgroundColor: "#5DAC46",
    borderRadius: 5,
    paddingVertical: 2,
  },
  prdcontent: {},
});

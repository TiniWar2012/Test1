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
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import "react-native-gesture-handler";
const Separator = () => <View style={styles.separator} />;
export default function Hung_Map({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() => navigation.navigate("Hung_Home")}>
            <AntDesign name="arrowleft" size={25} color="white" />
          </TouchableOpacity>
          <View>
            <Text style={{ color: "white" }}>Hệ thống nhà thuốc</Text>
          </View>
          <EvilIcons name="heart" size={25} color="white" />
        </View>
        <View style={styles.content}>
          <View style={styles.img}>
            <Image
              style={styles.storeimg}
              source={require("../assets/pmc-store-new.png")}
            />
          </View>
          <View>
            <View style={styles.detail}>
              <View style={styles.icon}>
                <MaterialCommunityIcons
                  name="home-minus-outline"
                  size={20}
                  color="white"
                />
              </View>
              <View style={styles.title}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  1.030 nhà thuốc
                </Text>
                <Text style={{ fontSize: 10, color: "white" }}>
                  Pharmacity trên toàn quốc
                </Text>
              </View>
            </View>
            <View style={styles.detail}>
              <View style={styles.icon}>
                <SimpleLineIcons name="handbag" size={20} color="white" />
              </View>
              <View style={styles.title}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Đặt và nhận
                </Text>
                <Text style={{ fontSize: 10, color: "white" }}>
                  Đặt hàng qua ứng dụng, nhận hàng tại nhà thuốc gần nhất
                </Text>
              </View>
            </View>
            <View style={styles.detail}>
              <View style={styles.icon}>
                <SimpleLineIcons name="location-pin" size={20} color="white" />
              </View>
              <View style={styles.title}>
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Tìm nhà thuốc
                </Text>
                <Text style={{ fontSize: 10, color: "white" }}>
                  Tìm nhà thuốc Pharmacity gần nhất nhanh chóng
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.box1}>
        <Text>Tìm địa chỉ nhà thuốc Pharmacity</Text>
        <TouchableOpacity style={styles.choose}>
          <Text style={{ color: "lightgrey" }}>Chọn khu vực</Text>
          <AntDesign name="down" size={20} />
        </TouchableOpacity>
        <Separator />
        <TouchableOpacity>
          <Text style={{ color: "grey" }}>Bấm để thay đổi khu vực</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <FlatList
          data={DATA1}
          renderItem={renderItem1}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
const DATA1 = [
  {
    id: 1,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 2,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 3,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 4,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 5,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 6,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 7,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 8,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 9,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 10,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 11,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 12,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 13,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 14,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
  {
    id: 15,
    name: "01 Nguyễn Thái Học, Gia Lai",
    icon1: <EvilIcons name="heart" size={20} />,
    icon2: <SimpleLineIcons name="location-pin" size={20} />,
    icon3: <AntDesign name="clockcircleo" size={20} />,
    icon4: <MaterialCommunityIcons name="home-minus-outline" size={20} />,
    location:
      "01 Nguyễn Thái Học, Phường Hội Thương, Thành phố Pleiku, Tỉnh Gia Lai",
    time: "06:00:00 - 23:30:00",
    house: "DNPMC1390",
  },
];
const renderItem1 = ({ item }) => (
  <View style={styles.box}>
    <View style={styles.titlemap}>
      <Text style={{ color: "#5DAC46", fontWeight: "bold" }}>{item.name}</Text>
      <Text style={styles.font3}>{item.icon1}</Text>
    </View>
    <View style={styles.contentmap}>
      <Text style={styles.font3}>{item.icon2}</Text>
      <Text style={styles.font1}>{item.location}</Text>
    </View>
    <View style={styles.contentmap}>
      <Text style={styles.font3}>{item.icon3}</Text>
      <Text style={styles.font2}>{item.time}</Text>
    </View>
    <View style={styles.contentmap}>
      <Text style={styles.font3}>{item.icon4}</Text>
      <Text style={styles.font1}>{item.house}</Text>
    </View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  head: {
    backgroundColor: "#0f62f9",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  storeimg: {
    width: 180,
    height: 120,
  },
  detail: {
    flexDirection: "row",
    marginVertical: 10,
  },
  content: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  title: {
    width: "65%",
    paddingHorizontal: 10,
  },
  img: {
    marginHorizontal: 10,
  },
  titlemap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  contentmap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  box: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: "lightgrey",
  },
  font1: {
    paddingLeft: 10,
    width: "95%",
  },
  font2: {
    paddingLeft: 10,
    width: "95%",
    color: "#5DAC46",
  },
  font3: {
    color: "grey",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  choose: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 70,
  },
  box1: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "white",
    top: 260,
    width: "95%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  body: {
    marginTop: 150,
    marginBottom: 110,
  },
});

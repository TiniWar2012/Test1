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
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  EvilIcons,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";
import "react-native-gesture-handler";
const DATA = [
  {
    id: "1",
    title: "Chỉnh sửa thông tin cá nhân",
    icon: <FontAwesome5 name="user-edit" size={20} />,
  },
  {
    id: "2",
    title: "Bảo mật tài khoản",
    icon: <FontAwesome5 name="user-lock" size={20} />,
  },
  {
    id: "3",
    title: "Số địa chỉ",
    icon: <FontAwesome5 name="map-marker-alt" size={20} />,
  },
  {
    id: "4",
    title: "Nhà thuốc yêu thích",
    icon: <FontAwesome5 name="heart" size={20} />,
  },
  {
    id: "5",
    title: "Toa thuốc của tôi",
    icon: <FontAwesome5 name="prescription-bottle-alt" size={20} />,
  },
  {
    id: "6",
    title: "Mã khuyến mãi của bạn",
    icon: <MaterialCommunityIcons name="sale" size={20} />,
  },
  {
    id: "7",
    title: "Quy chế xếp hạng",
    icon: <FontAwesome5 name="award" size={20} />,
  },
  {
    id: "8",
    title: "Thẻ thành viên",
    icon: <MaterialCommunityIcons name="wallet-membership" size={20} />,
  },
  {
    id: "9",
    title: "Phiếu quà tặng",
    icon: <FontAwesome5 name="gift" size={20} />,
  },
  {
    id: "10",
    title: "Trung tâm trợ giúp",
    icon: <MaterialCommunityIcons name="message-question-outline" size={20} />,
  },
  {
    id: "11",
    title: "Cài đặt",
    icon: <Feather name="settings" size={20} />,
  },
  {
    id: "12",
    title: "Tư vấn khách hàng",
    icon: <MaterialCommunityIcons name="headset" size={20} />,
  },
  {
    id: "13",
    title: "Đăng xuất",
    icon: <MaterialCommunityIcons name="logout" size={20} />,
  },
];
const Separator = () => <View style={styles.separator} />;
export default function DM_User({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.boxitem}>
      <View style={styles.formFL}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 4,
          }}
        >
          <Text style={{ right: 10 }}>{item.icon}</Text>
          <Text>{item.title}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Hung_Home")}>
          <MaterialIcons name="keyboard-arrow-right" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.user}>
          <FontAwesome5 name="user-circle" size={70} color="#7b9cd5" />
          <Text style={{ color: "white", fontSize: 15 }}>Khách hàng</Text>
        </View>
        <View style={styles.col1}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <View style={styles.item}>
              <Image
                source={require("../assets/1.png")}
                style={{ width: 40, height: 30 }}
              />
              <Text style={{ color: "#81a570", fontSize: 10 }}>Thành viên</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text>Để lên hạng bạn cần chi tiêu thêm</Text>
              <Text style={{ fontWeight: "bold", textAlign: "center" }}>
                7.717.060 VN
              </Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require("../assets/2.png")}
                style={{ width: 35, height: 25, resizeMode: "cover" }}
              />
              <Text
                style={{ color: "#81a570", fontSize: 10, textAlign: "center" }}
              >
                V.I.P
              </Text>
            </View>
          </View>
          <Separator />
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={styles.item}>
              <Image
                source={require("../assets/1.png")}
                style={{ width: 45, height: 35 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  resizeMode: "cover",
                  fontWeight: "bold",
                }}
              >
                Thành viên
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 2,
              }}
            >
              <View style={{ marginRight: 100 }}>
                <Text style={styles.text1}>Điểm tích lũy</Text>
                <Text style={styles.text2}>Điểm có thể dùng</Text>
                <Text style={styles.text3}>Điểm đã dùng</Text>
              </View>
              <View>
                <Text style={styles.text1}>0</Text>
                <Text style={styles.text2}>0</Text>
                <Text style={styles.text3}>0</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.box2}>
        <View>
          <SafeAreaView>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 4,
    backgroundColor: "#0d55d7",
  },
  box2: {
    flex: 6,
    backgroundColor: "#ededed",
  },
  user: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  col1: {
    flex: 3,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  item: {
    paddingHorizontal: 8,
    marginTop: 20,
    alignItems: "center",
  },
  text1: {
    color: "#0c65f7",
  },
  text2: {
    color: "#68ab56",
    marginTop: 10,
  },
  text3: {
    color: "#cc4e4e",
    marginTop: 10,
  },
  formFL: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 15,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  boxitem: {
    flex: 3,
    marginLeft: 5,
    marginRight: 5,
  },
});

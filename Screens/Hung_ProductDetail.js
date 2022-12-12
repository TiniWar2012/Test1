import React, { Component, useState } from "react";
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
import { Dimensions } from "react-native";
export default function Hung_ProductDetail({ navigation }) {
  const [imgActive, setimgActive] = useState(0);
  // onchange = (nativeEvent) => {
  //   if (nativeEvent) {
  //     const slide = Math.ceil(
  //       nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
  //     );
  //     if (slide != imgActive) {
  //       setimgActive(slide);
  //     }
  //   }
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Hung_Home");
            navigation.navigate("MyTabs");
          }}
        >
          <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        <View>
          <Image
            source={require("../assets/logostore.png")}
            style={styles.logo}
          />
        </View>
        <Ionicons name="cart-outline" size={25} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrap}>
          <ScrollView
            // onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={e}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapdot}>
            {images.map((e, index) => (
              <Text
              // key={e}
              // style={imgActive == index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.productdtl}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Thực phẩm bảo vệ sức khỏe giảm rối loạn chức năng gan Vgold Fort
            (Hộp 60 Viên)
          </Text>
          <Text
            style={{
              color: "#5dac46",
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            210.000 đ
          </Text>
          <Text>
            Mua hàng và tích
            <Text style={{ color: "green" }}> 21.000 </Text>
            điểm thành viên
          </Text>
          <TouchableOpacity
            style={styles.searchshop}
            onPress={() => navigation.navigate("Hung_Map")}
          >
            <Entypo name="shop" size={15} color="#0f62f9" />
            <Text
              style={{
                padding: 10,
                textDecorationLine: "underline",
                color: "#0F62F9",
              }}
            >
              Tìm nhà thuốc còn hàng
            </Text>
            <AntDesign name="right" size={15} color="#0f62f9" />
          </TouchableOpacity>
          <Separator />
          <View style={styles.delivery}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Các hình thức giao hàng
            </Text>
            <View style={styles.options}>
              <AntDesign name="star" color={"#5dac46"} size={20} />
              <Text
                style={{
                  color: "#5dac46",
                  paddingLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Freeship
                <Text style={{ color: "black", fontWeight: "normal" }}>
                  {" "}
                  cho đơn hàng từ{" "}
                </Text>
                300.000 đ
              </Text>
            </View>
            <View style={styles.hang}>
              <Text style={styles.border}>GHN</Text>
              <Text style={styles.border}>Ahamove</Text>
            </View>
          </View>
        </View>
        <Separator />
        <Text style={styles.in4title}>Thông tin</Text>
        <Separator />
        <View style={styles.in4sp}>
          <Text style={styles.title}>Thành phần</Text>
          <Text>- Cardus Marianus 200mg</Text>
          <Text>- Vitamin B1 2mg</Text>
          <Text>- Vitamin B2 2mg</Text>
          <Text>- Vitamin B6 1mg</Text>
          <Text>- Vitamin B12 5mcg</Text>
          <Text>- Vitamin B5 10mg</Text>
          <Text>- Vitamin PP 10mg</Text>
          <Text style={styles.title}>Công dụng</Text>
          <Text>
            - Hỗ trợ giúp bổ gan, giúp bảo vệ gan, hỗ trợ tăng cường chức năng
            gan
          </Text>
          <Text style={styles.title}>Đối tượng người sử dụng</Text>
          <Text>
            - Người có chức năng gan kém, người uống nhiều bia rượu, sử dụng
            thuốc có hại cho gan
          </Text>
          <Text style={styles.title}>Hướng dẫn sử dụng</Text>
          <Text>
            - Trẻ em trên 10 tuổi và người lớn: uống 1 viên/lần x 2 lần/ngày
          </Text>
          <Text style={styles.title}>
            Bảo quản:
            <Text style={{ fontWeight: "normal" }}>
              {" "}
              Nơi khô, mát, tránh ánh nắng trực tiếp, nhiệt độ không quá 30°C.
            </Text>
          </Text>
          <Text style={styles.title}>
            Đóng gói:
            <Text style={{ fontWeight: "normal" }}>
              {" "}
              Hộp 60 viên, kích thước 8cm x 12cm x 7cm
            </Text>
          </Text>
          <Text style={styles.title}>
            Thương hiệu:
            <Text style={{ fontWeight: "normal" }}> Vgold Fort</Text>
          </Text>
          <Text style={styles.title}>
            Sản xuất tại:
            <Text style={{ fontWeight: "normal" }}>
              {" "}
              Công Ty TNHH Thanh Hằng (Việt Nam)
            </Text>
          </Text>
          <Text style={styles.title}>
            Số giấy công bố:
            <Text style={{ fontWeight: "normal" }}> 8554/2021/ĐKSP</Text>
          </Text>
          <Text style={styles.title}>
            Công ty chịu trách nhiệm và phân phối sản phẩm:
            <Text style={{ fontWeight: "normal" }}>
              {" "}
              Công Ty TNHH InDiCo (Việt Nam)
            </Text>
          </Text>
          <Text style={styles.warning}>
            Thực phẩm này không phải là thuốc, không có tác dụng thay thế thuốc
            chữa bệnh.
          </Text>
        </View>
        <Separator />
      </ScrollView>
      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.purchase}
          onPress={() => navigation.navigate("DM_Cart")}
        >
          <Text style={{ textAlign: "center", color: "#0f62f9" }}>
            Mua ngay
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.order}
          onPress={() => navigation.navigate("DM_Cart")}
        >
          <Ionicons name="cart-outline" size={20} color={"white"} />
          <Text
            style={{
              paddingLeft: 5,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const Separator = () => <View style={styles.separator} />;
const images = [
  require("../assets/ctsp1.jpg"),
  require("../assets/ctsp2.jpg"),
  require("../assets/ctsp3.jpg"),
  require("../assets/ctsp4.jpg"),
];
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.45,
  },
  wrapdot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "white",
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  logo: {
    width: 100,
    height: 40,
    marginTop: 5,
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchshop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  options: {
    flexDirection: "row",
    margin: 5,
  },
  border: {
    borderWidth: 1,
    borderRadius: 10,
    width: "20%",
    margin: 5,
    textAlign: "center",
    borderColor: "#ECF0F1",
    padding: 3,
  },
  hang: {
    flexDirection: "row",
  },
  in4title: {
    textAlign: "center",
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
  title: {
    fontWeight: "bold",
    marginVertical: 10,
  },
  warning: {
    fontStyle: "italic",
  },
  purchase: {
    borderWidth: 1,
    width: "38%",
    padding: 15,
    borderColor: "#0f62f9",
    backgroundColor: "#f2f6ff",
    borderRadius: 10,
  },
  order: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: "60%",
    backgroundColor: "#5DAC46",
    borderRadius: 10,
    borderColor: "#5DAC46",
    padding: 15,
    justifyContent: "center",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    backgroundColor: "transparent",
  },
});

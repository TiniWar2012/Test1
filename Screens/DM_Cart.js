import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const DATA = [
  {
    id: "1",
    title1: "Viên hỗ trợ khớp Stada ArthroStop Intensive",
    title2: "Thực phẩm bảo vệ giảm rối loạn chức năng gan Vgold Fort",
    Giá1: "395.000 VNĐ",
    Giá2: "210.000 VNĐ",
    sell1: "118.500 VNĐ",
    sell2: "63.000 VNĐ",
    image1: require("../assets/sp1.png"),
    image2: require("../assets/sp2.jpg"),
  },
  {
    id: "2",
    title1: "Thực phẩm bảo vệ sức khỏe bổ xung vitamin EE4",
    title2: "Thực phẩm bảo vệ sức khỏe giúp giải độc gan BioCo Simarin Extra",
    Giá1: "205.000 VNĐ",
    Giá2: "506.000 VNĐ",
    sell1: "200.000 VNĐ",
    sell2: "446.800 VNĐ",
    image1: require("../assets/SP03.png"),
    image2: require("../assets/SP03.png"),
  },
  {
    id: "3",
    title1: "Bộ test nhanh COVID-19 tại nhà",
    title2: "Bộ xét nghiệm nhanh nước bọt COVID-19",
    Giá1: "89.000 VNĐ",
    Giá2: "68.000 VNĐ",
    sell1: "70.400 VNĐ",
    sell2: "53.200 VNĐ",
    image1: require("../assets/test1.png"),
    image2: require("../assets/test2.png"),
  },
  {
    id: "4",
    title1: "Sữa bột dinh dưỡng cho trẻ biếng ăn (1,6 kg)",
    title2: "Sữa bột dinh dưỡng cho trẻ biếng ăn (850 g)",
    Giá1: "1.089.000 VNĐ",
    Giá2: "968.000 VNĐ",
    sell1: "702.400 VNĐ",
    sell2: "530.200 VNĐ",
    image1: require("../assets/SP07.png"),
    image2: require("../assets/SP07.png"),
  },
];
const Separator = () => <View style={styles.separator} />;

export default function DM_Cart({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.boxitem}>
      <View style={styles.formFL}>
        <View>
          <View style={{ borderRadius: 20 }}>
            <Image source={item.image1} style={{ height: 180, width: 180 }} />
          </View>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              width: 170,
            }}
          >
            {item.title1}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>{item.sell1}</Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "gray",
                marginLeft: 5,
              }}
            >
              {item.Giá1}
            </Text>
          </View>
        </View>
        <View>
          <Image source={item.image2} style={{ height: 180, width: 180 }} />
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 15,
              width: 170,
            }}
          >
            {item.title2}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text>{item.sell2}</Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                color: "gray",
                marginLeft: 5,
              }}
            >
              {item.Giá2}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DM_Catalog");
              navigation.navigate("MyTabs");
            }}
          >
            <AntDesign name="arrowleft" color={"white"} size={30} />
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 100,
            }}
          >
            Giỏ hàng của bạn
          </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.header}>
          <View style={styles.item}>
            <Image
              source={require("../assets/avta.png")}
              style={{ width: 150, height: 150, resizeMode: "cover" }}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
            >
              Tiếc quá! Pharmacity không tìm thấy sản {"\n"}phẩm {"\n"}nào trong
              giỏ hàng của bạn
            </Text>
          </View>
          <View
            style={{
              width: 240,
              height: 240,
              alignItems: "center",
              marginTop: 10,
              marginLeft: 80,
            }}
          >
            <Button
              onPress={() => {
                navigation.navigate("DM_Catalog");
                navigation.navigate("MyTabs");
              }}
              title="Tiếp tục mua hàng"
              color="#fc8f28"
            />
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}
            >
              Sản phẩm đã xem
            </Text>
          </View>
          <Separator />
          <View style={{ flex: 1, width: "100%" }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b4aba",
  },
  box1: {
    flex: 1,
    backgroundColor: "#0b4aba",
    justifyContent: "center",
  },
  box2: {
    flex: 9,
    backgroundColor: "#f3f4f6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flex: 4,
  },
  footer: {
    flex: 6,
  },
  item: {
    paddingHorizontal: 8,
    marginTop: 20,
    alignItems: "center",
  },
  boxitem: {
    flex: 3,
    marginLeft: 5,
    marginRight: 5,
  },
  formFL: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

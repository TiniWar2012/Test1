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
  const renderItem1 = ({ item }) => (
    <View>
      <Image style={styles.sizeimg} source={item.imgurl} />
    </View>
  );
  const renderItem2 = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("DM_User")}>
      <View style={styles.boxicon}>
        <Image style={styles.sizeicons} source={item.iconurl} />
        <Text style={styles.texticon}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem3 = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("DM_User")}>
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
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate("Hung_ProductDetail")}
    >
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
          <TouchableOpacity>
            <Text style={styles.font4}>Th??m v??o gi??? h??ng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem6 = ({ item }) => (
    <TouchableOpacity
      style={styles.row}
      onPress={() => navigation.navigate("Hung_ProductDetail")}
    >
      <View style={styles.prdcontent}>
        <View style={{ paddingVertical: 10 }}>
          <Image style={styles.imgsp} source={item.imgurl} />
        </View>
        <Text numberOfLines={2} ellipsizeMode="tail" style={{ fontSize: 11 }}>
          {item.name}
        </Text>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.font3}>{item.price}</Text>
        </View>
        <View style={styles.btnadd}>
          <TouchableOpacity>
            <Text style={styles.font4}>Th??m v??o gi??? h??ng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
  const renderItem7 = ({ item }) => (
    <TouchableOpacity style={styles.row1}>
      <View>
        <Image style={styles.logostore} source={item.imgurl} />
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.header}>
        <View style={styles.css}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../assets/vietnam.png")}
          />
          <TextInput style={styles.input} placeholder="T??m tr??n Pharmacity" />
          <TouchableOpacity onPress={() => navigation.navigate("Order")}>
            <SimpleLineIcons
              name="bell"
              style={{ fontSize: 20, color: "white" }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("DM_Cart")}>
            <Feather
              name="shopping-cart"
              style={{ fontSize: 20, color: "white" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                  <Text style={styles.baseText}> nh?? thu???c tr??n to??n qu???c</Text>
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
          <Text style={{ fontSize: 20 }}>Danh m???c s???n ph???m</Text>
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
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/duocpham.png")}
                />
                <Text style={styles.font}>D?????c ph???m</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/cssk.png")}
                />
                <Text style={styles.font}>Ch??m s??c s???c kh???e</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/cscn.png")}
                />
                <Text style={styles.font}>Ch??m s??c c?? nh??n</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/sptl.png")}
                />
                <Text style={styles.font}>S???n ph???m ti???n l???i</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.products}>
            <View style={styles.productdeltails}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/tpcn.png")}
                />
                <Text style={styles.font}>Th???c ph???m ch???c n??ng</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/tbyt.png")}
                />
                <Text style={styles.font}>M??? v?? B??</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/cssd.png")}
                />
                <Text style={styles.font}>Ch??m s??c s???c ?????p</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productdeltails}>
              <TouchableOpacity
                onPress={() => navigation.navigate("DM_Catalog")}
              >
                <Image
                  style={styles.productimg}
                  source={require("../assets/tbyt.png")}
                />
                <Text style={styles.font}>Thi???t b??? y t???</Text>
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
            <Text style={styles.font1}>Th??ng ??u ????i gi???m ?????n 80%</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DM_Catalog")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#003CBF" }}>Xem t???t c???</Text>
              <AntDesign
                name="right"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#003CBF",
                  paddingLeft: 5,
                }}
              />
            </TouchableOpacity>
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
        <View style={styles.monthsale}>
          <View style={styles.box}>
            <Text style={styles.font1}>Mua s???n ph???m th??? 2 gi?? 1.000 VN??</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DM_Catalog")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#003CBF" }}>Xem t???t c???</Text>
              <AntDesign
                name="right"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#003CBF",
                  paddingLeft: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listsp}>
            <FlatList
              horizontal={true}
              data={DATA6}
              renderItem={renderItem6}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.monthsale}>
          <View style={styles.box}>
            <Text style={styles.font1}>
              Deal s???c mua 2 t???ng 4 - ch??? t??? 23.000??/b???
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DM_Catalog")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#003CBF" }}>Xem t???t c???</Text>
              <AntDesign
                name="right"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#003CBF",
                  paddingLeft: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listsp}>
            <FlatList
              horizontal={true}
              data={DATA7}
              renderItem={renderItem6}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.monthsale}>
          <View style={styles.box}>
            <Text style={styles.font1}>S???n ph???m b??n ch???y</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DM_Catalog")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#003CBF" }}>Xem t???t c???</Text>
              <AntDesign
                name="right"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#003CBF",
                  paddingLeft: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listsp}>
            <FlatList
              horizontal={true}
              data={DATA8}
              renderItem={renderItem6}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.monthsale}>
          <View style={styles.box}>
            <Text style={styles.font1}>S???n ph???m b??n ch???y</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("DM_Catalog")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#003CBF" }}>Xem t???t c???</Text>
              <AntDesign
                name="right"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#003CBF",
                  paddingLeft: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listsp}>
            <FlatList
              horizontal={true}
              data={DATA9}
              renderItem={renderItem6}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.monthsale}>
          <View style={styles.box}>
            <Text style={styles.font1}>Th????ng hi???u n???i b???t</Text>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ color: "#003CBF" }}>Xem t???t c???</Text>
              <AntDesign
                name="right"
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  color: "#003CBF",
                  paddingLeft: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.listsp}>
            <FlatList
              horizontal={true}
              data={DATA10}
              renderItem={renderItem7}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.box1}>
            <Image
              style={styles.sizeboximg}
              source={require("../assets/logo6.png")}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.font5}>Mi???n ph?? v???n chuy???n</Text>
            </View>
            <View>
              <Text style={styles.font6}>
                ??p d???ng cho ????n h??ng t??? 300.000 ??
              </Text>
            </View>
          </View>
          <View style={styles.box1}>
            <Image
              style={styles.sizeboximg}
              source={require("../assets/logo7.png")}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.font5}>Thu???c t???t gi?? r???</Text>
            </View>

            <Text style={styles.font6}>N???u kh??ng r???, Ho??n ti???n ch??nh l???ch</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.box1}>
            <Image
              style={styles.sizeboximg}
              source={require("../assets/logo8.png")}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.font5}>Nh?? thu???c g???n b???n</Text>
            </View>

            <Text style={styles.font6}>
              T??m ngay nh?? thu???c g???n n??i b???n s???ng v?? gh?? th??m
            </Text>
          </View>
          <View style={styles.box1}>
            <Image
              style={styles.sizeboximg}
              source={require("../assets/logo9.png")}
            />
            <View style={{ marginTop: 20 }}>
              <Text style={styles.font5}>T??ch l??y ??i???m</Text>
            </View>

            <Text style={styles.font6}>
              T??ch l??y ??i???m th?????ng v?? s??? d???ng ??i???m cho giao d???ch
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// }
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
    name: "Coupun c???a t??i",
  },
  {
    id: 2,
    iconurl: require("../assets/pill.png"),
    name: "Th??? th??nh vi??n",
  },
  {
    id: 3,
    iconurl: require("../assets/chat.png"),
    name: "T?? v???n tr???c tuy???n",
  },
];
const DATA3 = [
  {
    id: 1,
    iconurl: require("../assets/phone.png"),
    name: "D?????c s?? tr???c tuy???n",
  },
  {
    id: 2,
    iconurl: require("../assets/notebook.png"),
    name: "C???m nang mua s???m",
  },
  {
    id: 3,
    iconurl: require("../assets/health.png"),
    name: "C???m nang s???c kh???e",
  },
];
const DATA4 = [
  {
    id: 1,
    prdimg: require("../assets/duocpham.png"),
    name: "D?????c ph???m",
  },
  {
    id: 2,
    prdimg: require("../assets/cssk.png"),
    name: "Ch??m s??c s???c kh???e",
  },
  {
    id: 3,
    prdimg: require("../assets/cscn.png"),
    name: "Ch??m s??c c?? nh??n",
  },
  {
    id: 4,
    prdimg: require("../assets/sptl.png"),
    name: "S???n ph???m ti???n l???i",
  },
];
const DATA5 = [
  {
    id: 1,
    discount: "-70%",
    imgurl: require("../assets/sp1.png"),
    name: "Vi??n h??? tr??? kh???p Stada ArthroStop Intensive",
    oldprice: "395.000??",
    price: "118.500??/H???p",
  },
  {
    id: 2,
    discount: "-70%",
    imgurl: require("../assets/sp2.jpg"),
    name: "Th???c ph???m b???o v??? s???c kh???e gi???m r???i lo???n ch???c n??ng gan",
    oldprice: "210.000??",
    price: "63.000??/H???p",
  },
  {
    id: 3,
    discount: "-70%",
    imgurl: require("../assets/sp3.png"),
    name: "Kh???u trang 3M KF94 9013 m??u tr???ng (G??i 1 c??i)",
    oldprice: "29.400??",
    price: "8.820??/G??i",
  },
  {
    id: 4,
    discount: "-70%",
    imgurl: require("../assets/sp4.png"),
    name: "Kh???u trang 3M KF94 9013 m??u ??en (G??i 1 c??i)",
    oldprice: "29.400??",
    price: "8.820??/G??i",
  },
  {
    id: 5,
    discount: "-80%",
    imgurl: require("../assets/sp5.png"),
    name: "K???o s???a b??? sung canxi Moo Chews v??? vani (G??i 18g)",
    oldprice: "31.500??",
    price: "9.450??/G??i",
  },
];
const DATA6 = [
  {
    id: 1,
    imgurl: require("../assets/sp6.png"),
    name: "Th???c ph???m b???o v??? s???c kh???e b??? sung vitamin E Bioco Huvit E4 (H???p 60 vi??n)",
    price: "205.500 ??/H???p",
  },
  {
    id: 2,
    name: "Th???c ph???m b???o v??? s???c kh???e gi??p gi???i ?????c gan BioCo Simarin Extra (H???p 20 vi??n x 4 v???)",
    imgurl: require("../assets/sp7.png"),
    price: "506.000 ??/H???p",
  },
  {
    id: 3,
    imgurl: require("../assets/sp8.png"),
    name: "Th???c ph???m b???o v??? s???c kh???e PROANTIOBIOPLUS",
    price: "480.000 ??/H???p",
  },
  {
    id: 4,
    imgurl: require("../assets/sp9.png"),
    name: "Bao cao su Pharmacity Easy Fit (10 c??i/h???p)",
    price: "87.000 ??/H???p",
  },
  {
    id: 5,
    imgurl: require("../assets/sp10.png"),
    name: "Bao cao su gai l???nh Pharmacity Dot &amp; Cool (3 c??i/h???p)",
    price: "53.000 ??/H???p",
  },
];
const DATA7 = [
  {
    id: 1,
    imgurl: require("../assets/sp11.jpg"),
    name: "B??? x??t nghi???m nhanh COVID-19 t???i nh?? Humasis COVID-19 Ag Home Test Kit",
    price: "89.000 ??/B???",
  },
  {
    id: 2,
    name: "B??? x??t nghi???m nhanh COVID-19 t???i nh?? Humasis COVID-19 Ag Home Test Kit (H???p 5 kit)",
    imgurl: require("../assets/sp12.jpg"),
    price: "445.000 ??/H???p",
  },
  {
    id: 3,
    imgurl: require("../assets/sp13.jpg"),
    name: "B??? x??t nghi???m nhanh n?????c b???t Covid-19 Antigen Rapid Test Kit (Saliva) ",
    price: "69.000 ??/B???",
  },
  {
    id: 4,
    imgurl: require("../assets/sp14.jpg"),
    name: "B??? x??t nghi???m nhanh kh??ng nguy??n SARS-CoV-2 SureScreen Diagnostics Covid-19 Test Kit ",
    price: "80.000 ??/B???",
  },
  {
    id: 5,
    imgurl: require("../assets/sp15.jpg"),
    name: "B??? x??t nghi???m nhanh Covid-19 Antigen Self-Test Abbott Panbio Test Kit ",
    price: "81.900 ??/B???",
  },
];
const DATA8 = [
  {
    id: 1,
    imgurl: require("../assets/sp16.png"),
    name: "S???a b???t dinh d?????ng cho tr??? bi???ng ??n Abbott Pediasure BA (850g)",
    price: "570.000 ??/Lon",
  },
  {
    id: 2,
    name: "Betadine Throat Spray 0.45% (chai 50ml)",
    imgurl: require("../assets/sp17.png"),
    price: "62.000 ??/Chai",
  },
  {
    id: 3,
    imgurl: require("../assets/sp18.png"),
    name: "D???u gi?? xanh Con ?? Eagle Brand Medicated Oil (Chai 24ml) ",
    price: "80.000 ??/Chai",
  },
  {
    id: 4,
    imgurl: require("../assets/sp14.jpg"),
    name: "B??? x??t nghi???m nhanh kh??ng nguy??n SARS-CoV-2 SureScreen Diagnostics Covid-19 Test Kit ",
    price: "80.000 ??/B???",
  },
  {
    id: 5,
    imgurl: require("../assets/sp20.jpg"),
    name: "Berocca Performance Orange (H???p 12 v??? x 2 vi??n) ",
    price: "196.800 ??/H???p",
  },
];
const DATA9 = [
  {
    id: 1,
    imgurl: require("../assets/sp21.jpg"),
    name: "B??? s???n ph???m size nh??? du l???ch Pharmacist Formulators S???a r???a m???t d?????ng ???m- Kem d?????ng ???m ch???ng n???ng - Serum d?????ng ???m",
    price: "845.000 ??/B???",
  },
  {
    id: 2,
    name: "Telfast BD 60mg (H???p 3 v??? x 10 vi??n)",
    imgurl: require("../assets/sp22.jpg"),
    price: "120.000 ??/H???p",
  },
  {
    id: 3,
    imgurl: require("../assets/sp23.jpg"),
    name: "Tinh ch???t Vitamin C Pharmacist Formulators (Chai 20ml) ",
    price: "565.000 ??/Chai",
  },
  {
    id: 4,
    imgurl: require("../assets/sp24.png"),
    name: "Toner v?? tinh ch???t d?????ng ???m Pharmacist Formulators 2in1 Moisturising Toner and Essence (Chai 200ml)",
    price: "375.000 ??/Chai",
  },
  {
    id: 5,
    imgurl: require("../assets/sp25.jpg"),
    name: "Nizoral 2% (H???p 1 chai nh???a x 50ml) ",
    price: "55.000 ??/H???p",
  },
];
const DATA10 = [
  {
    id: 1,
    imgurl: require("../assets/logo1.png"),
    name: "Pharmacity",
  },
  {
    id: 2,
    name: "Nutrigen",
    imgurl: require("../assets/logo2.png"),
  },
  {
    id: 3,
    imgurl: require("../assets/logo3.png"),
    name: "Inno.N ",
  },
  {
    id: 4,
    imgurl: require("../assets/logo4.png"),
    name: "Goodlife",
  },
  {
    id: 5,
    imgurl: require("../assets/logo5.png"),
    name: "CJ",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  maps: {
    marginVertical: 10,
  },
  map: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 15,
    backgroundColor: "#0F62F9",
    borderColor: "#0F62F9",
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
  adv: {
    width: "99%",
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
    paddingVertical: 10,
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
    borderColor: "lightgrey",
    borderRadius: 10,
    width: 160,
    flexDirection: "column",
    marginRight: 5,
    padding: 5,
    marginTop: 10,
  },
  font1: {
    fontSize: 15,
    fontWeight: "500",
    maxWidth: "70%",
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
    marginVertical: 3,
    paddingVertical: 5,
  },
  row1: {
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 10,
  },
  logostore: {
    width: 70,
    height: 70,
  },
  box1: {
    alignItems: "center",
    width: "50%",
  },
  sizeboximg: {
    width: 55,
    height: 55,
  },
  font5: {
    textTransform: "uppercase",
    color: "#0F62F9",
  },
  font6: {
    color: "lightgray",
    textAlign: "center",
  },
  footer: {
    marginVertical: 5,
    marginHorizontal: 15,
    display: "flex",
    flexDirection: "row",
  },
});

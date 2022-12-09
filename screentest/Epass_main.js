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

export default class Epass_main extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={styles.view1}>
            <Image
              style={styles.logoapp}
              source={{ uri: "https://i.imgur.com/1bVQDfg.png" }}
            />
          </View>
          <View style={styles.info_user}>
            <View style={{ flexDirection: "row", margin: 20 }}>
              <Image
                style={styles.logouser}
                source={{
                  uri: "https://img.icons8.com/dotty/80/ef5c43/user-male-circle.png",
                }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ color: "#A7A7A7", fontSize: 16 }}>
                  Xin chào,
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 23 }}>
                  đặng trần biên
                </Text>
              </View>
            </View>
            <View style={styles.bottominfo}>
              <View>
                <Text style={{ color: "#A7A7A7", fontSize: 19 }}>
                  Số dư ví:
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#A7A7A7",
                      fontSize: 23,
                      fontWeight: "bold",
                    }}
                  >
                    * * * * * *
                  </Text>
                  <AntDesign
                    name="eye"
                    color={"#9E9E9E"}
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </View>
              </View>
              <View style={{ flexDirection: "column-reverse", marginLeft: 50 }}>
                <Text style={styles.naptien}>Nạp tiền</Text>
              </View>
            </View>
          </View>
          <View style={styles.view1}></View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EF5C43",
    borderBottomLeftRadius: 250,
    borderBottomRightRadius: 220,
    borderBottomRadius: 150,
  },
  logoapp: {
    width: 92,
    height: 40,
  },
  view1: {
    backgroundColor: "#EF5C43",

    flex: 1,
    alignItems: "center",
  },
  info_user: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    flexDirection: "column",
    flex: 1,
    margin: 30,
  },
  logouser: {
    width: 60,
    height: 60,
  },
  naptien: {
    backgroundColor: "#EF5C43",
    borderRadius: 40,
    color: "#FFFFFF",
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  bottominfo: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    margin: 20,
  },
});

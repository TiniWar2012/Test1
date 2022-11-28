import React, { Component } from 'react'
import { Text,StyleSheet,View,Button,TouchableOpacity,Image,TextInput,ScrollView,SafeAreaView} from 'react-native'
import {FontAwesome,Feather,SimpleLineIcons,AntDesign,Ionicons,MaterialIcons,EvilIcons,Entypo,Fontisto,} from "@expo/vector-icons";
import 'react-native-gesture-handler';

export default class Baemin extends Component {
  render() {
    const {navigation} = this.props
    return (
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                    {/* Location, notify, navbar */}
            <View style={styles.header}>
                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
                >
                <Ionicons name="location-sharp" color={"#39C4C9"} size={30} />
                <TextInput
                    placeholder="Hoàng Quốc Việt, P. Cổ Nhuế 1,..."
                    placeholderTextColor={"black"}
                    style={{ marginLeft: 10 }}
                />
                <Entypo
                    name="chevron-right"
                    color={"black"}
                    size={20}
                    style={{ justifyContent: "space-evenly" }}
                    onPress={() => {
                    navigation.navigate("Toco");
                    }}
                />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginRight: 10 }}>
                    <Fontisto name="email" color={"black"} size={20} />
                </View>
                <View>
                    <EvilIcons name="navicon" color={"black"} size={20} />
                </View>
                </View>
            </View>
            {/* searching */}
            <View style={styles.search}>
                <Ionicons name="ios-search" color={"#7A7E83"} size={20} />
                <TextInput placeholder="Tìm nhà hàng, món ăn" />
            </View>
            {/* banner */}
            <View>
                <Image
                style={styles.banner}
                source={{
                    uri: "https://static.baemin.vn/events/190919_Flashsales_Collection/New_user.jpg",
                }}
                />
            </View>
            {/* Mart */}
            <View>
                <Image
                style={styles.iconMenu}
                source={{
                    uri: "https://i.imgur.com/bPrgxcn.png",
                }}
                />
            </View>
            {/* MenuApp */}
            <View>
                {/* row */}
                <View style={styles.rowMenu}>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate("Toco"); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/0GdOSVj.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/knKhYGg.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/325GNXi.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/8WwwMi3.jpg",  }} />
                </TouchableOpacity>
                </View>

                {/* row 2 */}

                <View style={styles.rowMenu}>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/rq2QUpp.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/UJDxAmS.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/IXZqnOs.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/UkidEIc.jpg",  }} />
                </TouchableOpacity>
                </View>

                {/* row 3 */}
                <View style={styles.rowMenu}>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/Yn9zlSd.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/sQShUjP.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/atXmKvG.jpg",  }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn6} onPress={() => { navigation.navigate(""); }} >
                    <Image style={styles.icon} source={{ uri: "https://i.imgur.com/ph1LNdd.jpg",  }} />
                </TouchableOpacity>
                </View>

            </View>
            {/* Footer Banner */}
            <View>
                <Image
                style={styles.footerbanner}
                source={{
                    uri: "https://i0.wp.com/ninediop.com/wp-content/uploads/2021/01/baemin-chien-luoc-tap-trung-va-danh-chan-1.png?resize=900%2C239&ssl=1",
                }}
                />
            </View>

            
        </View>
        </ScrollView>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingLeft: 20,
      paddingRight: 20,
    },
    header: {
      flexDirection: "row",
      marginTop: 50,
      justifyContent: "space-between",
    },
    search: {
      marginTop: 10,
      borderRadius: 20,
      backgroundColor: "#F4F6FA",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    banner: {
      width: "100%",
      height: 200,
      borderRadius: 10,
      marginTop: 20,
      resizeMode: "contain",
    },
    iconMenu: {
      width: 100,
      height: 60,
      marginTop: 30,
    },
    icon: {
      width: 70,
      height: 70,
    },
    rowMenu: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 10,
      alignContent: "center",
      alignItems: "center",
    },
    footerbanner: {
      marginTop:30,
      width: "100%",
      height: 100,
      borderRadius: 10,
    },
  
  
  });

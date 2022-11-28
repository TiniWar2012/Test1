import React, { Component } from 'react'
import {StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView } from 'react-native'
import {FontAwesome,Feather,SimpleLineIcons,Entypo,AntDesign,Ionicons,MaterialIcons,EvilIcons,Ma,MaterialCommunityIcons} from "@expo/vector-icons";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default class Epass extends Component {
  render() {
    const {navigation} = this.props
    return (
      <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <AntDesign name='left' color={'white'} size={20} />
            <Text style={styles.title}> Trung tâm trợ giúp</Text>
            <Text>    </Text>
          </View>
          {/* Menu */}
            <View style={styles.main}>
                {/* button 1 */}
                  <View style={styles.button}>
                    <View style={{flexDirection:'row', alignItems: 'center',alignContent: 'center',}}>
                      <MaterialCommunityIcons name="message-text" color={'#F29A4A'} size={20} />
                      <Text style={styles.list}>Góp ý</Text>
                    </View>
                    <AntDesign name='right' color={'#747474'} size={15} />
                  </View>
                {/*  */}
                {/* button 1 */}
                  <View style={styles.button}>
                    <View style={{flexDirection:'row', alignItems: 'center',alignContent: 'center',}}>
                      <Ionicons name="ios-call" color={'#F29A4A'} size={20} />
                      <Text style={styles.list}>Hotline</Text>
                    </View>
                    <AntDesign name='right' color={'#747474'} size={15} />
                  </View>
                {/*  */}
                {/* button 1 */}
                  <View style={styles.button}>
                    <View style={{flexDirection:'row', alignItems: 'center',alignContent: 'center',}}>
                      <Image style={styles.icon} source={{uri:'https://img.icons8.com/fluency/48/000000/facebook-circled.png'}} />
                      <Text style={styles.list}>Fanpage</Text>
                    </View>
                    <AntDesign name='right' color={'#747474'} size={15} />
                  </View>
                {/*  */}
                {/* button 1 */}
                  <View style={styles.button}>
                    <View style={{flexDirection:'row', alignItems: 'center',alignContent: 'center',}}>
                    <Image style={styles.icon} source={{uri:'https://img.icons8.com/fluency/48/000000/facebook-messenger--v2.png'}} />
                      <Text style={styles.list}>Messenger</Text>
                    </View>
                    <AntDesign name='right' color={'#747474'} size={15} />
                  </View>
                {/*  */}
                {/* button 1 */}
                  <View style={styles.button}>
                    <View style={{flexDirection:'row', alignItems: 'center',alignContent: 'center',}}>
                    <Image style={styles.icon} source={{uri:'https://img.icons8.com/ultraviolet/40/000000/error.png'}} />
                      <Text style={styles.list}>Góp ý</Text>
                    </View>
                    <AntDesign name='right' color={'#747474'} size={15} />
                  </View>
                {/*  */}
            </View>
        </View>

        {/*  */}
                      {/* Nav_Bar */}
                      <View style={styles.nav_bar}>
                  <View style={styles.nav_button} >
                    <Entypo name='home' color={'#838383'} size={30}/>
                    <Text style={styles.label_button}>Trang chủ</Text>
                  </View>
                  <View style={styles.nav_button} >
                    <AntDesign name='appstore1' color={'#838383'} size={30}/>
                    <Text style={styles.label_button}>Tiện ích</Text>
                  </View>
                  <View style={styles.nav_button} >
                    <MaterialCommunityIcons name='bell' color={'#838383'} size={30}/>
                    <Text style={styles.label_button}>Thông báo</Text>
                  </View>
                  <View style={styles.nav_button} >
                    <Ionicons name='md-settings' color={'#838383'} size={30}/>
                    <Text style={styles.label_button}>Cài đặt</Text>
                  </View>
                </View>
                {/*  */}

        </ScrollView>
          
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#EF5C43',
    },
    header: {
      padding:20,
      flexDirection:'row',
      marginTop:40,
      marginBottom:30,
      // flex:1,
      justifyContent:'space-between',
      alignItems:'center',
    },
    title: {
      color: 'white',
      fontSize:20,
    },
    main: {
        backgroundColor:'#F9F9F9',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
    button:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      alignContent: 'center',
      paddingLeft:30,
      paddingRight:20,
      backgroundColor:'#ffffff',
      height:70,
      marginTop:20,
      marginLeft:30,
      marginRight:30,
      borderRadius:20,
    },
    list:{
      fontWeight:'bold',
      fontSize:17,
      marginLeft:20,
    },
    icon:{
      height:25,
      width:25,
    },
    nav_bar:{
      backgroundColor:'#ffffff',
      flexDirection:'row',
      justifyContent:'space-evenly',
      paddingLeft:20,
      paddingRight:20,
      paddingBottom:30,
      paddingTop:15,
    },
    nav_button:{
      flexDirection:'column',
      justifyContent:'space-between',
      alignItems:'center'
    },
    label_button:{
      color:'#A1A1A1',
      marginTop:5,
    },
  })

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, FlatList, ScrollView} from 'react-native'
import {FontAwesome,Feather,SimpleLineIcons,AntDesign,Ionicons,MaterialIcons,EvilIcons,Entypo,} from "@expo/vector-icons";
import 'react-native-gesture-handler';


export default class Toco extends Component {
  render() {
    const {navigation} = this.props
    return (
        <SafeAreaView >
        <ScrollView>
          <View style={styles.container}>
          {/* Header */}
              <View style={{flexDirection:'row', marginTop:50, justifyContent:'space-between'}}>
                  <Ionicons name='arrow-back' color={'black'} size={20} />
                  <Text style={{fontWeight:'bold', fontSize:18}} >ToCoToCo - Trần Thái Tông</Text>
                  <Entypo name='dots-three-horizontal'color={'black'} size={20} />
                </View>
                <View style={styles.list}>
                  <View style={styles.filter}>
                    <Text style={{fontWeight:'bold'}}>Dành cho bạn</Text>
                    <AntDesign name='down' color={'#606167'} size={15} />
                  </View>
                  <View style={styles.search}>
                    <Ionicons name="ios-search" color={'#606167'} size={15} />
                    <Text style={{fontWeight:'bold'}}>Tìm</Text>
                  </View>
                </View>
            {/* Menu */}
            <View>
                  {/* Row 1 */}
              <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
  
                <View style={styles.product}>
                  <View>
                    <Image style={styles.product_img} source={{ uri: "https://tocotocotea.com/wp-content/uploads/2021/01/Tra-Sua-Tran-Chau-Hoang-Gia-1-copy.jpg"}}/>
                    <Text >Trà sữa trân châu hoàng gia</Text>
                    <View style={styles.price}>
                      <Text style={{fontWeight:'bold'}}>41.400</Text>
                      <Text style={{marginLeft:10, textDecorationLine: 'line-through' ,color:'#818181'}}>46.000</Text>
                      <AntDesign name="tago" color={"#E6A878"} size={15} style={{marginLeft:10}} />
                    </View>
                  </View>
                </View>
                <View style={styles.product}>
                  <View>
                    <Image style={styles.product_img} source={{ uri: "https://tocotocotea.com/wp-content/uploads/2021/01/Tra-Sua-Tran-Chau-Hoang-Gia-1-copy.jpg"}}/>
                    <Text>Trà sữa 3 anh em</Text>
                    <View style={styles.price}>
                      <Text style={{fontWeight:'bold'}}>43.200</Text>
                      <Text style={{marginLeft:10, textDecorationLine: 'line-through' ,color:'#818181'}}>48.000</Text>
                      <AntDesign name="tago" color={"#E6A878"} size={15} style={{marginLeft:10}} />
                    </View>
                  </View>
                </View>
                </View>
                    {/*  */}
                {/* Row 2 */}
                <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
                <View style={styles.product}>
                  <View>
                    <Image style={styles.product_img} source={{ uri: "https://tocotocotea.com/wp-content/uploads/2021/01/Tra-Sua-Tran-Chau-Hoang-Gia-1-copy.jpg"}}/>
                    <Text>Trà sữa kim cương đen Okinawa</Text>
                    <View style={styles.price}>
                      <Text style={{fontWeight:'bold'}}>41.400</Text>
                      <Text style={{marginLeft:10, textDecorationLine: 'line-through' ,color:'#818181'}}>46.000</Text>
                      <AntDesign name="tago" color={"#E6A878"} size={15} style={{marginLeft:10}} />
                    </View>
                  </View>
                </View>
                <View style={styles.product}>
                  <View>
                    <Image style={styles.product_img} source={{ uri: "https://tocotocotea.com/wp-content/uploads/2021/01/Tra-Sua-Tran-Chau-Hoang-Gia-1-copy.jpg"}}/>
                    <Text>Trà sữa trân châu đường hổ</Text>
                    <View style={styles.price}>
                      <Text style={{fontWeight:'bold'}}>46.800</Text>
                      <Text style={{marginLeft:10, textDecorationLine: 'line-through' ,color:'#818181'}}>52.000</Text>
                      <AntDesign name="tago" color={"#E6A878"} size={15} style={{marginLeft:10}} />
                    </View>
                  </View>
                </View>
                </View>
                    {/*  */}
                {/* Row 3 */}
                                        <View style={{flexDirection:'row', justifyContent:"space-evenly"}}>
  
                <View style={styles.product}>
                  <View>
                    <Image style={styles.product_img} source={{ uri: "https://tocotocotea.com/wp-content/uploads/2021/01/Tra-Sua-Tran-Chau-Hoang-Gia-1-copy.jpg"}}/>
                    <Text>Trà sữa panda</Text>
                    <View style={styles.price}>
                      <Text style={{fontWeight:'bold'}}>43.200</Text>
                      <Text style={{marginLeft:10, textDecorationLine: 'line-through' ,color:'#818181'}}>48.000</Text>
                      <AntDesign name="tago" color={"#E6A878"} size={15} style={{marginLeft:10}} />
                    </View>
                  </View>
                </View>
                <View style={styles.product}>
                  <View>
                    <Image style={styles.product_img} source={{ uri: "https://tocotocotea.com/wp-content/uploads/2021/01/Tra-Sua-Tran-Chau-Hoang-Gia-1-copy.jpg"}}/>
                    <Text>Trà sữa hạnh phúc</Text>
                    <View style={styles.price}>
                      <Text style={{fontWeight:'bold'}}>41.400</Text>
                      <Text style={{marginLeft:10, textDecorationLine: 'line-through' ,color:'#818181'}}>46.000</Text>
                      <AntDesign name="tago" color={"#E6A878"} size={15} style={{marginLeft:10}} />
                    </View>
                  </View>
                </View>
                </View>
                {/*  */}
            </View>
            
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

// StyleSheet
const styles = StyleSheet.create({
    container:{
      marginLeft:10,
      marginRight:10,
    },
    product_img:{
      height:180,
      width:180,
      borderRadius:5,
    },
    list:{
      flex:1,
      flexDirection:'row'
    },
    filter:{
      paddingLeft:10,
      paddingRight:10,
      marginTop: 10,
      borderRadius: 20,
      height:35,
      backgroundColor: "#F4F6FA",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flex:3,
    },
    search:{
      width:100,
      paddingLeft:10,
      paddingRight:30,
      marginTop: 10,
      marginLeft:20,
      borderRadius: 20,
      height:35,
      backgroundColor: "#F4F6FA",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    price:{
      flexDirection:'row',
      justifyContent:'flex-start',
      marginTop:5,
  
    },
    product:{
      marginTop:20,
      flexDirection:'column',
      maxWidth:180,
    }
  });

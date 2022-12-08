import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import "react-native-gesture-handler";

export default class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Button title="Baemin" onPress={() => navigation.navigate("Baemin")} />
        <Button title="Toco" onPress={() => navigation.navigate("Toco")} />
        <Button title="ePass" onPress={() => navigation.navigate("ePass")} />
        <Button
          title="ePass_main"
          onPress={() => navigation.navigate("ePass_main")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

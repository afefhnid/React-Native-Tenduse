import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import WebView from "react-native-webview";
import Icon from "react-native-vector-icons/FontAwesome";

class SuiviDetails extends Component {
  Home() {
    let { navigation, data } = this.props;
    navigation.navigate("Home");
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.Home()} style={styles.header}>
          <Icon name={"chevron-left"} size={32} />
        </TouchableOpacity>

        <View style={{ display: "flex" }}>
          <Text style={styles.title}>SuiviDetails</Text>
        </View>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <WebView
            source={{ uri: "https://www.laposte.fr/outils/suivre-vos-envois" }}
          />
        </SafeAreaView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  header: {
    position: "relative",
    top: 32,
    left: 8,
    paddingTop: 15,
  },
  title: {
    textAlign: "center",
    marginTop: 0,
    fontWeight: "bold",
    color: "black",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 34,
  },
});

export default SuiviDetails;

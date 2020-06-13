import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

class TheTextComponent extends React.Component {
  handleTimestamp(timestamp) {
    if (timestamp == undefined) {
      return null;
    } else {
      var now = new Date().getTime() / 1000;
      var hours = Math.round((now - timestamp) / 1000 / 60 / 60);
      if (hours < 1) {
        return "Posted less than one hour ago.";
      } else {
        return "Posted " + parseInt(hours) + " hours ago.";
      }
    }
  }
  render() {
    return (
      <View style={styles.textContainer}>
        <View style={styles.postContainer}>
          <Text style={styles.text}>{this.props.item.text}</Text>
        </View>
        <Text style={styles.timeText}>
            - {this.handleTimestamp(this.props.item.timestamp)}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    width: (Dimensions.get("window").width / 4) * 3,
    height: Dimensions.get("window").height / 3,
    backgroundColor: "#4A5861",
    marginHorizontal: 20,
    borderRadius: 12,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    fontSize: 25,
  },
  timeText: {
    color: "white",
    fontSize: 14,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 3,
    position: "absolute",
    bottom: 10,
    left: 0
  },
});

export default TheTextComponent;

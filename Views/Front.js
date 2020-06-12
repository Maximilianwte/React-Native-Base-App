import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import {connect} from "react-redux";

import TheMoodBar from "../Components/TheMoodBar";
import TheTagBar from "../Components/TheTagBar";

const colors = ["#ED9B40","#D1495B","#007EA7"];

class Front extends React.Component {
  handleTimestamp(timestamp) {
    if (timestamp == undefined) {
      return null;
    } else {
      var now = new Date().getTime()/1000;
      var hours = Math.round((now - timestamp)/1000/60/60);
      if (hours < 1) {
        return "Posted less than one hour ago."
      }
      else {
        return "Posted " + parseInt(hours) + " hours ago.";
      }
    }
  }

  getPostBackground() {
    const number = Math.floor(Math.random() * 3); 
    return colors[number]
  }

  render() {
    return (
      <View style={styles.container}>
        <TheMoodBar />
        <TheTagBar />
        <View styles={styles.contentContainer}>
          <FlatList
            style={styles.postList}
            data={this.props.postData.reverse()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.postContainer, {backgroundColor: this.getPostBackground()}]}>
                <Text style={styles.post}>{item.text}</Text>
                <Text style={styles.postUser}>
                  - {this.handleTimestamp(item.timestamp)}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#1B272E",
  },
  headerContainer: {
    flex: 1,
    height: 50,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 2,
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#183446",
    marginTop: 50,
  },
  text: {
    marginTop: 50,
    fontSize: 18,
    alignSelf: "center",
    color: "white",
  },
  postList: {
    marginTop: 15,
    width: Dimensions.get("window").width,
  },
  postContainer: {
    backgroundColor: "#4A5861",
    marginVertical: 2,
    width: Dimensions.get("window").width,
  },
  post: {
    color: "white",
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 18,
  },
  postUser: {
    color: "white",
    paddingBottom: 10,
    paddingHorizontal: 30,
    fontSize: 13,
  },
});

function mapStateToProps(state) {
  return {
    postData: state.postData
  }
}

export default connect(mapStateToProps)(Front);
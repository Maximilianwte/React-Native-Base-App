import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import {connect} from "react-redux";

import TheMoodBar from "../Components/TheMoodBar";

import store from "../store/store";
import postData from "../store/reducers/posts";

class Front extends React.Component {
  handleTimestamp(timestamp) {
    if (timestamp == undefined) {
      return null;
    } else {
      var date = new Date();
      var timeNow = date.getTime();
      var hours = Math.abs(timeNow - timestamp) / 36e5;
      if (hours < 1) {
        return "Less than one hour ago."
      }
      else {
        return parseInt(hours) + " hours ago.";
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TheMoodBar />
        <View styles={styles.contentContainer}>
          <Text style={styles.text}>
            {"These are your " +
              this.props.postData.length +
              " most recent posts."}
          </Text>
          <FlatList
            style={styles.postList}
            data={this.props.postData}
            renderItem={({ item }) => (
              <View style={styles.postContainer}>
                <Text style={styles.post}>{item.id + ". " + item.text}</Text>
                <Text style={styles.postUser}>
                  - {item.user} - {this.handleTimestamp(item.timestamp)}
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
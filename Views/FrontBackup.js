import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";

import TheMoodBar from "../Components/TheMoodBar";
import TheTagBar from "../Components/TheTagBar";

const colors = ["#D96D7B", "#619FCF", "#E68D5A", "#60BD6D"];

class Front extends React.Component {
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

  getPostBackground() {
    const random = Math.floor(Math.random() * 4);
    return colors[random];
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/Shapes.jpg")}
          style={styles.image}
        >
          <TheMoodBar />
          <TheTagBar />
          <View styles={styles.contentContainer}>
            <FlatList
              style={styles.postList}
              data={this.props.postData.reverse()}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={[styles.postContainer]}>
                  <Text style={styles.post}>{item.text}</Text>
                  <Text style={styles.postUser}>
                    - {this.handleTimestamp(item.timestamp)}
                  </Text>
                </View>
              )}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "white",
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
    marginTop: 5,
    width: Dimensions.get("window").width,
  },
  postContainer: {
    backgroundColor: "#74747421",
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
  image: {
    height: Dimensions.get("window").height,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
  return {
    postData: state.postData,
  };
}

export default connect(mapStateToProps)(Front);

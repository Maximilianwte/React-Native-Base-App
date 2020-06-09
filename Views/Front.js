import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";

import TheMoodBar from "../Components/TheMoodBar";

export default class Front extends React.Component {
  state = {
    message: "Hey Max.",
    prop: this.props.style,
    textItemData: [{num: 1, post: "I am in love right now. Have fun everyone." },
    {num: 2, post: "In the last week I learned cooking. That was soo awesome :)." }],
  };
  handleButton = () => {
    this.setState({
      message: "Button was clicked",
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TheMoodBar />
        <View styles={styles.contentContainer}>
          <Text style={styles.text}>{"These are your " + this.state.textItemData.length +" most recent posts."}</Text>
          <FlatList
            style={styles.postList}
            data={this.state.textItemData}
            renderItem={({ item }) => (
              <Text style={styles.textItem}>{item.num + ". " + item.post}</Text>
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
    backgroundColor: "#2d2d2d",
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
    marginLeft: 30,
    marginTop: 15,
    width: Dimensions.get("window").width / 4 * 3,
  },
  textItem: {
    color: "white",
    fontSize: 18,
    marginTop: 5,
  },
});

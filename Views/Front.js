import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";

import TheMoodBar from "../Components/TheMoodBar";
import TheTagBar from "../Components/TheTagBar";
import TheTextComponent from "../Components/TheTextComponent";

const tagTypes = [
  "#happy",
  "#unsure",
  "#sad",
  "#badDay",
  "#MS",
  "#foodPoisoning",
  "#wrongFootWakeup",
  "#badHairDay",
];

class Front extends React.Component {
  renderTag(item) {
    if (this.props.activeTags.includes(item)) {
      return (
        <View>
          <Text style={styles.heading}>{item}</Text>
          <ScrollView style={styles.scrollView} horizontal={true}>
            {this.props.postData[item.substring(1, item.length)].map((item) => (
              <TheTextComponent item={item} />
            ))}
          </ScrollView>
        </View>
      );
    }
  }

  render() {
    const categories = tagTypes.map((item) => this.renderTag(item));
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/Shapes.jpg")}
          style={styles.image}
        >
          <TheMoodBar />
          <TheTagBar />
          <View styles={styles.contentContainer}>{categories}</View>
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
  text: {
    marginTop: 50,
    fontSize: 18,
    alignSelf: "center",
    color: "white",
  },
  image: {
    height: Dimensions.get("window").height,
    resizeMode: "cover",
  },
  heading: {
    fontSize: 30,
    color: "#4A5861",
    marginLeft: 20,
    marginBottom: 5,
    marginTop: Dimensions.get("window").height / 15,
  },
});

function mapStateToProps(state) {
  return {
    postData: state.postData,
    mood: state.mood,
    activeTags: state.activeTags,
  };
}

export default connect(mapStateToProps)(Front);

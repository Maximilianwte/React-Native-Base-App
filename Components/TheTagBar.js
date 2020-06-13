import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

class TheTagBar extends React.Component {
  state = {
    tags: [
      "#happy",
      "#unsure",
      "#sad",
      "#badDay",
      "#MS",
      "#foodPoisoning",
      "#wrongFootWakeup",
      "#badHairDay",
    ],
    activeTags: [],
  };

  handleTag = (id) => {
    if (!this.state.activeTags.includes(id)) {
      this.setState({ activeTags: [...this.state.activeTags, id] });
    } else {
      this.setState({
        activeTags: this.state.activeTags.filter((item) => item != id),
      });
    }
  };

  handleTagColor = (id) => {
    return this.state.activeTags.includes(id)
      ? styles.tagActive
      : styles.tagInactive;
  };

  render() {
    const tags = this.state.tags.map((item) => (
      <TouchableOpacity
        key={item}
        style={[styles.tag, this.handleTagColor(item)]}
        activeOpacity={0.7}
        onPress={() => {
          this.handleTag(item);
        }}
      >
        <Text style={styles.tagText}>{item}</Text>
      </TouchableOpacity>
    ));
    return (
      <View>
        <ScrollView style={styles.scrollView} horizontal={true}>
          {tags}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    width: Dimensions.get("window").width,
    //backgroundColor: "#4a586170"
  },
  tag: {
    marginVertical: 7,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  tagInactive: {
    backgroundColor: "#4A5861",
  },
  tagActive: {
    backgroundColor: "#60BD6D",
  },
  tagText: {
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 9,
    fontSize: 16,
  },
});

export default TheTagBar;

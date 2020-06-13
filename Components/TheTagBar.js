import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";

import store from "../store/store";
import { handleTags } from "../store/actions";

const tagTypes = [
  "#happy",
  "#unsure",
  "#sad",
  "#badDay",
  "#MS",
  "#foodPoisoning",
  "#wrongFootWakeup",
  "#badHairDay",
]

class TheTagBar extends React.Component {
  state = {
    activeTags: [],
  };

  handleTag = (id) => {
    store.dispatch(handleTags(id))
  };

  handleTagColor = (id) => {
    return this.props.activeTags.includes(id)
      ? styles.tagActive
      : styles.tagInactive;
  };

  handleTagTextColor = (id) => {
    return this.props.activeTags.includes(id)
    ? "white"
    : "black";
  }

  render() {
    const tags = tagTypes.map((item) => (
      <TouchableOpacity
        key={item}
        style={[styles.tag, this.handleTagColor(item)]}
        activeOpacity={0.7}
        onPress={() => {
          this.handleTag(item);
        }}
      >
        <Text style={[styles.tagText]}>{item}</Text>
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
    backgroundColor: "#F09EB7",
  },
  tagActive: {
    backgroundColor: "#60BD6D",
  },
  tagText: {
    paddingVertical: 5,
    paddingHorizontal: 9,
    fontSize: 16,
    color: "black"
  },
});

function mapStateToProps(state) {
  return {
    activeTags: state.activeTags,
  };
}

export default connect(mapStateToProps)(TheTagBar);


import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Dimensions,
  Modal,
} from "react-native";
import {connect} from "react-redux";

import store from "../store/store";
import { addPost } from "../store/actions";
import { changeModuleState } from "../store/actions";

const textMessage = {
  happy: "We're glad that you have a nice day. Others might have a bad day today. If you like, share your positive thoughts to make other people feel better today.",
  sad: ""
}

class PostInput extends React.Component {
  state = {
    userInput: ""
  };
  closeLayer() {
    this.addPost();
    store.dispatch(changeModuleState(false));
  }
  onTextChange(text) {
    this.setState({ userInput: text });
  }
  addPost() {
    if (this.state.userInput.length > 0) {
      var data = {
        text: this.state.userInput,
      };
      store.dispatch(addPost(data));
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.moduleActive}
        >
          <View style={styles.modalView}>
            <Text style={[styles.modalText, {textAlign: "left"}]}>
              {textMessage["happy"]}
            </Text>
            <Text style={styles.modalText}>
              {"Enter your text here: "}
            </Text>
            <TextInput
            multiline={true}
              style={styles.textInput}
              onChangeText={(text) => this.onTextChange(text)}
              value={this.state.userInput}
            />
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                this.closeLayer();
              }}
            >
              <Text style={styles.textStyle}>Send</Text>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    margin: 20,
    width: (Dimensions.get("window").width / 10) * 9,
    marginTop: 60,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
    fontSize: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "#F09EB7",
    borderRadius: 8,
  },
  textStyle: {
    color: "#183446",
    paddingHorizontal: 18,
    paddingVertical: 8,
    fontSize: 20,
    textAlign: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    height: 100,
    width: (Dimensions.get("window").width / 10) * 8,
    fontSize: 18,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
  },
});

function mapStateToProps(state) {
  return {
    moduleActive: state.moduleState.active
  }
}

export default connect(mapStateToProps)(PostInput);
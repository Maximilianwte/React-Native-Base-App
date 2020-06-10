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

export default class PostInput extends React.Component {
  state = {
    text: "Hello",
    userInput: "",
    active: false,
  };
  closeLayer() {
    this.setState({ active: false });
  }
  onTextChange(text) {
    this.setState({ userInput: text });
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.active !== this.state.active) {
      this.setState({ active: nextProps.active });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.active}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{"Enter your text here: " + this.state.userInput}</Text>
            <TextInput
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
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 35,
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
    backgroundColor: "#60BD6D",
    borderRadius: 8,
  },
  textStyle: {
    color: "#183446",
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 18,
    textAlign: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    height: 40,
    width: 230,
    fontSize: 18,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
  },
});

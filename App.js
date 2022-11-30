import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CusIcon from './src/Config/Components/icon';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  const addHandler = () => {
    if (inputText > -1) {
      listItems[index] = inputText;
      setListItems([...listItems]);
    } else {
      setListItems([...listItems.push(inputText)]);
    }
  };
  const delHandler = val => {
    setListItems(...listItems.splice(val, 1));
  };
  const editHandler = ind => {
    setIndex(ind);
    setInputText(ind);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <View style={styles.bodyView}>
        <ImageBackground
          style={styles.imageBg}
          source={require("./src/Utils/Images/beachSky.jpeg")}
        >
          <View style={styles.inputWindow}>

            <View style={styles.inputView}>

              <Text style={styles.headerText02}>Sign Up</Text>
              <TextInput
                style={styles.input}
                placeholder="user name"
                color={cusColors.NavyblueColor}
                onChangeText={(e) => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="email"
                onChangeText={(e) => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="password"
                onChangeText={(e) => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="father name"
                onChangeText={(e) => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="cnic number"
                onChangeText={(e) => setInputText(e)}
                value={inputText}
              />
              <TouchableOpacity title='Sign Up' style={styles.button} >
                <Text style={styles.butText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.transformView}>
              <CusIcon source={require("./src/Utils/Images/whatsappIcon.png")} />
              <CusIcon source={require("./src/Utils/Images/whatsappIcon.png")} />
              <CusIcon source={require("./src/Utils/Images/whatsappIcon.png")} />
              <Text style={styles.text}>Login with</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    // opacity: 0.88,
  },
  headerView: {
    width: "100%",
    height: "22%",
    backgroundColor: cusColors.greyColor,
    justifyContent: "center",
  },
  imageBg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 35,
    fontWeight: "450",
    alignSelf: 'center',
    color: cusColors.NavyblueColor,
  },
  headerText02: {
    fontSize: 25,
    alignSelf: 'center',
    color: cusColors.NavyblueColor,
    marginVertical: 12,
  },
  bodyView: {
    width: "100%",
    height: "74%",
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "green"
  },
  inputWindow: {
    width: '75%',
    height: 390,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: cusColors.greyColor,
  },
  inputView: {
    // width: '80%',
    flex: 7,
    height: 390,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: cusColors.greyColor,
    // paddingHorizontal: 20,
  },
  input: {
    width: "88%",
    height: 38,
    marginBottom: "5%",
    padding: 12,
    backgroundColor: cusColors.greyColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  // todoView: {
  //   width: '100%',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'flex-end',
  //   marginBottom: 5,
  // },
  button: {
    width: "85%",
    height: "11%",
    marginTop: "6%",
    // color: cusColors.greyColor,
    backgroundColor: cusColors.NavyblueColor,
    alignItems: "center",
    justifyContent: 'center',
  },
  butText: {
    color: cusColors.greyColor
  },
  transformView: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    width: 100,
    // fontStyle: "underlined",
    transform: [{ rotate: "270deg" }],
    marginTop: 30,
    color: cusColors.NavyblueColor,
  },
  linkText: {
    width: 80,
    fontWeight: '600',
    borderBottomWidth: 1.7,
    fontSize: 12,
    marginTop: 8,
    alignSelf: 'flex-end',
    color: "yellow",
    borderBottomColor: 'black',
  },
})

export default App;

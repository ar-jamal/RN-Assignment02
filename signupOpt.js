import React, {useState} from 'react';
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
          source={require('./src/Utils/Images/beachSky.jpeg')}>
          <View style={styles.inputWindow}>
            <View style={styles.inputView}>
              <Text style={styles.headerText02}>Sign Up</Text>
              <TextInput
                style={styles.input}
                placeholder="USERNAME"
                color={cusColors.NavyblueColor}
                onChangeText={e => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="EMAIL"
                onChangeText={e => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="PASSWORD"
                onChangeText={e => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="FATHERNAME"
                onChangeText={e => setInputText(e)}
                value={inputText}
              />
              <TextInput
                style={styles.input}
                placeholder="CNIC"
                onChangeText={e => setInputText(e)}
                value={inputText}
              />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.butText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.transformView}>
              <CusIcon
                source={require('./src/Utils/Images/facebookIcon.jpeg')}
              />
              <CusIcon
                source={require('./src/Utils/Images/whatsappIcon.jpeg')}
              />
              <CusIcon source={require('./src/Utils/Images/googleIcon.jpeg')} />
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
    width: '100%',
    height: '22%',
    backgroundColor: cusColors.greyColor,
    justifyContent: 'center',
  },
  imageBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 35,
    fontWeight: '450',
    alignSelf: 'center',
    color: cusColors.NavyblueColor,
  },
  headerText02: {
    fontSize: 25,
    alignSelf: 'center',
    color: cusColors.NavyblueColor,
    marginVertical: 18,
  },
  bodyView: {
    width: '100%',
    height: '74%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  inputWindow: {
    width: '70%',
    height: 390,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 22,
    backgroundColor: cusColors.greyColor,
  },
  inputView: {
    width: '95%',
    // flex: 7,
    height: 390,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: "yellow",
    // paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 38,
    marginBottom: '4%',
    padding: 6,
    fontSize: 11,
    backgroundColor: cusColors.greyColor,
    borderBottomWidth: 2,
    borderBottomColor: '#00000015',
  },
  button: {
    // width: "100%",
    height: '10%',
    marginTop: '6%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#00000015',
  },
  butText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1.2,
    margin: 8,
    color: cusColors.NavyblueColor,
  },
  transformView: {
    width: 50,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    width: 100,
    transform: [{rotate: '270deg'}],
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
    color: 'yellow',
    borderBottomColor: 'black',
  },
});

export default App;

// Icon code:

// import React from 'react';
// import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import cusColors from '../../Utils/colors';

// export default function CusIcon(props) {
//     const { source, } = props;
//     return (
//         <TouchableOpacity style={styles.iconView}>
//             <Image
//                 style={styles.icon}
//                 source={source}
//             />
//         </TouchableOpacity>
//     );
// }

// const styles = StyleSheet.create({
//     iconView: {
//         width: 40,
//         height: 40,
//         marginVertical: 4,
//     },
//     icon: {
//         width: "100%",
//         height: "100%",
//         borderRadius: 20,
//         borderWidth: 1,
//         borderColor: "#00000015",
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 7,
//         },
//         shadowOpacity: 0.43,
//         shadowRadius: 9.51,

//         elevation: 15,

//     }
// });

// Input code:

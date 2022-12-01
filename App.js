import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res =>
        res.json())
      .then(json => {
        console.log(json);
        setListItems(json)
      })
      .catch((err) => {
        console.log("err", err)
      })
    // axios.get('https://fakestoreapi.com/products?limit=5')
    //   .then((res) => 
    //   {console.log(res.data) })
    //   // .then((json) => {console.log(json)})
    //   .catch((err) => {
    //     console.log("err",err)
    //   })
  }, [])

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <ImageBackground
          style={styles.headerImage}
          source={require("./src/Utils/Images/apiHeader.jpg")}
        >
        </ImageBackground>
      </View>
      <View style={styles.bodyView}>
        {!!listItems && listItems > 0
          ? listItems.map((e, i) => (
            <View style={styles.cardView} key={i} >
              <Image style={styles.imageView}
                source={{ uri: listItems[e].image }}
              ></Image>
              <Text>price</Text>
              <Text>name</Text>

            </View>)) : null}
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
    height: "25%",
    // justifyContent: "center",
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  bodyView: {
    width: "100%",
    height: "74%",
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 12,
    backgroundColor: "green"
  },
  cardView: {
    width: 300,
    height: 300,
    backgroundColor: "blue",
  },
  imageView: {
    width: 100,
    height: 100
  }

})

export default App;

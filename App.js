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
  ScrollView,
  Image,
} from 'react-native';
import CusIcon from './src/Config/Components/icon';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [index, setIndex] = useState('');
  const [listItems, setListItems] = useState([]);
  const [loader, setloader] = useState(false)

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
    setloader(true);
    async function fetchedData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setListItems(data)
        setloader(false);
        console.log(data)
      }
      catch (err) {
        console.log("err", err)
        setloader(false);
      }
    }
    fetchedData();
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
      {/* <Text>{listItems[0]?.title}</Text> */}
      <View style={styles.bodyView}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.cardView}>
            {loader ? <Image
              style={{ width: "100%", aspectRatio: 1, /* padding: "20%" */ }}
              source={require("./src/Utils/Images/loader04.gif")}
            />
              : listItems.length > 0
                ? listItems.map((e, i) => (
                  <View style={styles.cardUnit} key={i} >
                    <Image style={styles.imageView}
                      source={{ uri: `${listItems[i].image}` }}
                    />
                    <Text style={styles.price}>${e.price}</Text>
                    <Text style={styles.text}>{e.title}</Text>
                  </View>))
                : <Text style={{ alignSelf: "center", alignContent: "center" }}>no data found</Text>}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: "center",
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
    height: "75%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightyellow"
  },
  scrollView: {
    width: "100%",
    // backgroundColor: "lightyellow",

  },
  cardView: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    // alignItems: "center",
    padding: 10,
    // backgroundColor: "yellow",
    // opacity: .5,
  },
  cardUnit: {
    width: 80,
    height: 180,
    margin: 6,
    // backgroundColor: "yellowgreen",
  },
  imageView: {
    width: 80,
    height: 130,
    backgroundColor: "yellow",
  },
  price: {
    fontSize: 14,
    fontWeight: "700"
  },
  text: {
    fontSize: 14
  }

})

export default App;

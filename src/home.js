import { useNavigation } from '@react-navigation/native';
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
import CusIcon from './Config/Components/icon';
import cusColors from './Utils/colors';
import globalStyles from './Utils/globalStyles';

export default function HomeScreen() {
  const [inputText, setInputText] = useState('');
  const [index, setIndex] = useState('');
  const [listItems, setListItems] = useState([]);
  const [loader, setloader] = useState(false);
  const Navigation = useNavigation();

  const cusChip = val => {
    return (
      <View style={globalStyles.chipView}>
        <Text style={globalStyles.chipText}>more</Text>
      </View>
    );
  };
  const titleHandler = val => {
    const title = val.length > 12 ? val.slice(0, 12) + '...' : val;
    return (
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: 'yellow',
          width: '100%',
          flex: 3,
          paddingHorizontal: 6,
          paddingBottom: 6,
        }}>
        <Text style={globalStyles.text}>{title}</Text>
        {cusChip(val)}
      </View>
    );
  };
  const onItemPressHandler = selectedItem => {
    // console.log(selectedItem);
    const selectedItemCategory = listItems.filter(
      e => e.category === selectedItem.category,
    );
    // console.log(selectedItemCategory);
    Navigation.navigate('ItemDetails', [selectedItem.id, selectedItemCategory]);
  };

  useEffect(() => {
    setloader(true);
    async function fetchedData() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setListItems(data);
        setloader(false);
        // console.log(data);
      } catch (err) {
        console.log('err', err);
        setloader(false);
      }
    }
    fetchedData();
  }, []);

  return (
    <SafeAreaView style={globalStyles.mainView}>
      <View style={globalStyles.headerView}>
        <ImageBackground
          style={globalStyles.headerImage}
          source={require('./Utils/Images/apiHeader.jpg')}></ImageBackground>
      </View>
      <View style={globalStyles.bodyView}>
        <ScrollView style={globalStyles.scrollView}>
          <Text style={globalStyles.categoryHeading}> All Categories</Text>
          <View style={globalStyles.cardView}>
            {loader ? (
              <Image
                style={{
                  width: '40%',
                  aspectRatio: 1,
                  marginHorizontal: '45%',
                  marginTop: '35%',
                }}
                source={require('./Utils/Images/loader04.gif')}
              />
            ) : listItems.length > 0 ? (
              listItems.map((e, i) => (
                <TouchableOpacity
                  style={globalStyles.cardUnit}
                  key={i}
                  onPress={() => onItemPressHandler(e)}>
                  <View style={{ justifyContent: 'space-between', flex: 7 }}>
                    <Image
                      resizeMode="contain"
                      style={globalStyles.image}
                      source={{ uri: `${listItems[i].image}` }}
                    />
                    <Text style={globalStyles.price}>${e.price}</Text>
                  </View>
                  {titleHandler(e.title)}
                </TouchableOpacity>
              ))
            ) : (
              <Text style={{ alignSelf: 'center', alignContent: 'center' }}>
                no data found
              </Text>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

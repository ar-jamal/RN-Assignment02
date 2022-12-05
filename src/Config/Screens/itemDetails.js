import axios from 'axios';
import React, {useEffect, useState} from 'react';
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
// import { colors } from "react-native-paper/lib/typescript/styles"
import globalStyles from '../../Utils/globalStyles';
// import CusIcon from './Config/Componentsgit

export default function ItemDetails({Navigation, route}) {
  const selectedItemId = route.params[0];
  const selectedItem = route.params[1].filter(e => e.id === selectedItemId);
  // console.log(selectedItem[0].image);
  const selectedItemCategory = route.params[1].filter(
    e => e.id !== selectedItemId,
  );
  // const titleLenght = selectedItem.title.length % 30 > 0 ? selectedItem.title.slice(0, 30)

  // console.log(selectedItemId);
  // console.log(selectedItemCategory);
  const [loader, setloader] = useState(false);

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

  return (
    <SafeAreaView style={globalStyles.mainView}>
      <View style={globalStyles.headerView}>
        <ImageBackground
          style={globalStyles.headerImage}
          source={require('../../Utils/Images/apiHeader.jpg')}></ImageBackground>
      </View>
      <View style={globalStyles.bodyView}>
        {loader ? (
          <Image
            style={{
              width: '40%',
              aspectRatio: 1,
              marginHorizontal: '45%',
              marginTop: '35%',
            }}
            source={require('../../Utils/Images/loader04.gif')}
          />
        ) : selectedItemCategory.length > 0 ? (
          <ScrollView style={globalStyles.scrollView}>
            <Text style={globalStyles.categoryHeading}>
              {selectedItem[0].category}
            </Text>
            <View style={styles.selectedItemView}>
              <View style={styles.selectedItemUpperView}>
                <View style={styles.selectedItemLeftView}>
                  <Image
                    resizeMode="contain"
                    style={styles.selectedItemImage}
                    source={{uri: `${selectedItem[0].image}`}}
                  />
                </View>
                <View style={styles.selectedItemRightView}>
                  <Text style={globalStyles.price}>
                    ${selectedItem[0].price}
                  </Text>
                  <Text style={globalStyles.text}>
                    {selectedItem[0].title /* .length < 30 ? slice(0, 30) */}
                  </Text>
                </View>
              </View>
              <ScrollView style={styles.selectedItemLowerView}>
                {/* <View style={{height: '150%'}}> */}
                <Text style={{fontSize: 14, fontWeight: '600'}}>
                  Description:
                </Text>
                <Text style={globalStyles.text}>
                  {selectedItem[0].description}
                </Text>
                {/* </View> */}
                {/* <Text style={globalStyles.text}>{selectedItem[0].rating}</Text> */}
              </ScrollView>
            </View>
            <View style={globalStyles.cardView}>
              {selectedItemCategory.map((e, i) => (
                <TouchableOpacity key={i} style={globalStyles.cardUnit}>
                  <View style={{justifyContent: 'space-between', flex: 7}}>
                    <Image
                      resizeMode="contain"
                      style={globalStyles.image}
                      source={{uri: `${selectedItemCategory[i].image}`}}
                    />
                    <Text style={globalStyles.price}>{e.price}</Text>
                  </View>
                  {titleHandler(e.title)}
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        ) : (
          <Text style={{alignSelf: 'center', alignContent: 'center'}}>
            no data found
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  selectedItemView: {
    justifyContent: 'center',
    width: '95%',
    padding: '3.5%',
    borderRadius: 30,
    margin: 10,
    // marginRight: 10,
    height: '50%',
    backgroundColor: 'lightyellow',
  },
  selectedItemUpperView: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    width: '100%',
    // flex: 4,
    height: '60%',
    // marginBottom: 5,
    // backgroundColor: "blue",
  },
  selectedItemLeftView: {
    // justifyContent: "flex-end",
    marginRight: 15,
    // width: "40%",
    flex: 2,
    // backgroundColor: "red",
    // alignItems:
  },
  selectedItemRightView: {
    flex: 6,
  },
  selectedItemLowerView: {
    // height: '3%',
    // justifyContent: 'flex-start',
    // backgroundColor: 'yellowgreen',
  },
  selectedItemImage: {
    height: '90%',
    // marginRight: 12,
    // aspectRatio: 1,
  },
});

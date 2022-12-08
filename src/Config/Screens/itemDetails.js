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
import cusColors from '../../Utils/colors';
import globalStyles from '../../Utils/globalStyles';

export default function ItemDetails({ Navigation, route }) {
  const selectedItemId = route.params[0];
  const sameCatList = route.params[1]

  // console.log(sameCatList)
  const [selectedState, setSelectedState] = useState({

    selectedItem: sameCatList.find(e => e.id === selectedItemId),
    sameCatListFiltered: sameCatList.filter(e => e.id !== selectedItemId)
  })
  // console.log(selectedState.selectedItem)

  console.log(selectedState.sameCatListFiltered);
  console.log(sameCatList);

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
          width: '100%',
          flex: 3,
          paddingHorizontal: 6,
          paddingBottom: 6,
          backgroundColor: 'yellow',
          // backgroundColor: cusColors.purpleLavender,
          // borderRadius: 15
        }}>
        <Text style={globalStyles.text}>{title}</Text>
        {cusChip(val)}
      </View>
    );
  };

  const onSameCatPressHandler = (val) => {
    console.log('val', val)
    const selectedItem02 = sameCatList.find(e => e.id === val);
    const sameCatListFiltered02 = sameCatList.filter(e => e.id !== val);
    setSelectedState({

      selectedItem: selectedItem02,
      sameCatListFiltered: sameCatListFiltered02
    })
  }
  // console.log(selectedState.selectedItem)

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
        ) : sameCatList.length > 0 ? (
          <ScrollView style={globalStyles.scrollView}>
            <Text style={globalStyles.categoryHeading}>
              {selectedState.selectedItem.category}
            </Text>
            <View style={styles.selectedItemView}>
              <View style={styles.selectedItemLeftView}>
                <Image
                  resizeMode="contain"
                  style={styles.selectedItemImage}
                  source={{ uri: `${selectedState.selectedItem.image}` }}
                />
                <Text style={globalStyles.price}>
                  Price: ${selectedState.selectedItem.price}
                </Text>
              </View>
              <View style={styles.selectedItemRightView}>
                <Text style={globalStyles.text}>{selectedState.selectedItem.title}</Text>
                <Text style={{ fontSize: 14, fontWeight: '600' }}>
                  Description:
                </Text>
                <View
                  style={{ height: 40 }}
                >
                  <ScrollView>
                    <Text style={globalStyles.text}>
                      {selectedState.selectedItem.description}
                    </Text>
                  </ScrollView>
                </View>
              </View>
            </View>
            <View style={{
              height: 20,
              // borderBottomColor: cusColors.purpleLavenderDark,
              borderBottomWidth: StyleSheet.hairlineWidth,
              // paddingHorizontal: 6
            }}
            />
            <View style={[globalStyles.cardView]}>
              {sameCatList.map((e, i) => (
                <TouchableOpacity
                  style={[globalStyles.cardUnit]}
                  key={i}
                  onPress={() => onSameCatPressHandler(e.id)}>
                  <View style={{ justifyContent: 'space-between', flex: 7 }}>
                    <Image
                      resizeMode="contain"
                      style={globalStyles.image}
                      source={{ uri: `${e.image}` }}
                    />
                    <Text style={globalStyles.price}>${e.price}</Text>
                  </View>
                  {titleHandler(e.title)}
                </TouchableOpacity>
              ))}
            </View >
          </ScrollView >
        ) : (
          <Text style={{ alignSelf: 'center', alignContent: 'center' }}>
            no data found
          </Text>
        )}
      </View >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  selectedItemView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '95%',
    padding: 20,
    borderRadius: 30,
    marginHorizontal: 10,
    height: 160,
    backgroundColor: cusColors.purpleLavenderLight,
    // backgroundColor: 'lightyellow',
  },
  // selectedItemUpperView: {
  //   justifyContent: 'flex-start',
  //   alignItems: "flex-start",
  //   width: '100%',
  //   // flex: 4,
  //   height: '50%',
  //   marginBottom: 8,
  //   // backgroundColor: "blue",
  // },
  selectedItemLeftView: {
    marginRight: 15,
    flex: 2,
    height: "100%"
    // backgroundColor: "red",
  },
  selectedItemRightView: {
    flex: 6,
    height: "100%"
  },
  // selectedItemLowerView: {
  //   height: '3%',
  // },
  selectedItemImage: {
    height: '80%',
    // backgroundColor: "yellow"
  },
})

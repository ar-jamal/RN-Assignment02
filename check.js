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
// import { colors } from "react-native-paper/lib/typescript/styles"
import globalStyles from '../../Utils/globalStyles';
// import CusIcon from './Config/Componentsgit

export default function ItemDetails({ Navigation, route }) {

    const [selectedItemId, setSelectedItemId] = useState(route.params[0]);
    const selectedItemI = route.params[1];

    // const [selectedItemState, setSelectedItemState] = useState(
    const selectedItemState = () => {
        var selectedItem = selectedItemI.filter(e => e.id === selectedItemId)
        var sameCatList = selectedItemI.filter(e => e.id !== selectedItemId)
    }
    useEffect(() => {
        selectedItemState();

    }, [selectedItemId])
    // )
    console.log(selectedItem);
    // const selectedItemState.  selectedItemId = route.params[0];

    // useEffect(() => {
    //     selectedItemState. selectedItemState()

    // }, [selectedItemState.  selectedItemId])

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

    const onSameCatPressHandler = (ind) => {
        setSelectedItemState({
            selectedItem: selectedItem0.filter(e => e.id === ind),
            sameCatList: selectedItem0.filter(e => e.id !== ind)
        })
    }

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
                ) : selectedItemState.sameCatList.length > 0 ? (
                    <ScrollView style={globalStyles.scrollView}>
                        <Text style={globalStyles.categoryHeading}>
                            {selectedItemState.selectedItem.category}
                        </Text>
                        <View style={styles.selectedItemView}>
                            <View style={styles.selectedItemUpperView}>
                                <View style={styles.selectedItemLeftView}>
                                    <Image
                                        resizeMode="contain"
                                        style={styles.selectedItemImage}
                                        source={{ uri: `${selectedItemState.selectedItem.image}` }}
                                    />
                                </View>
                                <View style={styles.selectedItemRightView}>
                                    <Text style={globalStyles.price}>
                                        ${selectedItemState.selectedItem.price}
                                    </Text>
                                    <Text style={globalStyles.text}>
                                        {selectedItemState.selectedItem.title /* .length < 30 ? slice(0, 30) */}
                                    </Text>
                                </View>
                            </View>
                            <ScrollView style={styles.selectedItemLowerView}>
                                <View /* style={{ height: '150%' }} */>
                                    <Text style={{ fontSize: 14, fontWeight: '600' }}>
                                        Description:
                                    </Text>
                                    <Text style={globalStyles.text}>
                                        {selectedItemState.selectedItem.description}
                                    </Text>
                                </View>
                                {/* <Text style={globalStyles.text}>{selectedItemState. selectedItem[0].rating}</Text> */}
                            </ScrollView>
                        </View>
                        <View style={[globalStyles.cardView, /* selectedItemState.sameCatListength > 3 ? null : { justifyContent: "flex-start" } */]}>
                            {selectedItemState.sameCatList.map((e, i) => (
                                <TouchableOpacity
                                    style={[globalStyles.cardUnit]}
                                    key={i}
                                    onpress={() => onSameCatPressHandler(e.id)}

                                >
                                    <View style={{ justifyContent: 'space-between', flex: 7 }}>
                                        <Image
                                            resizeMode="contain"
                                            style={globalStyles.image}
                                            source={{ uri: `sameCatList[i].image }` }}
                                        />
                                        <Text style={globalStyles.price}>${e.price}</Text>
                                    </View>
                                    {titleHandler(e.title)}
                                </TouchableOpacity>
                            ))
                            }
                        </View>
                    </ScrollView>
                ) : (
                    <Text style={{ alignSelf: 'center', alignContent: 'center' }}>
                        no data found
                    </Text>
                )}
            </View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    selectedItemView: {
        justifyContent: 'center',
        width: '95%',
        padding: '3.5%',
        borderRadius: 30,
        marginHorizontal: 10,
        // marginRight: 10,
        height: '40%',
        backgroundColor: 'lightyellow',
    },
    selectedItemUpperView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        width: '100%',
        // flex: 4,
        height: '50%',
        marginBottom: 8,
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
        height: '100%',
        // backgroundColor: "yellow",
        // marginRight: 12,
        // aspectRatio: 1,
    },
});













const cardUnitWidth = sameCatList.length % 4 === 3 ? (83.8/sameCatList.Length) : 20.95
    const cardUnitWidthPer = cardUnitWidth + "%";



const [titleLength, setTitleLength] = useState('');
  const cusChip = (val) => {
    return (
      <TouchableOpacity style={styles.chipView} onPress= {() => setTitleLength(9)}>
        <Text style={styles.chipText}>more</Text>
      </TouchableOpacity>
    )
  }
  const titleHandler = (val) => {
    setTitleLength(val)
    const title = titleLength > 10 ? titleLength.slice(0, 10) + "..." : val
    return (
      <>
        <Text style= {styles.text}>{title}</Text>
        {cusChip(val)}
      </>

    );


    const titleLenght = selectedItem.title.length % 30 > 0 ? selectedItem.title.slice()
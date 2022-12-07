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
import globalStyles from '../../Utils/globalStyles';

export default function FemaleCategory({ Navigation, route }) {

    // const selectedItemId = route.params[0]
    // const sameCatList = route.params[1]
    // const [selectedState, setSelectedState] = useState({

    //     selectedItem: sameCatList.filter(e => e.id === selectedItemId),
    //     sameCatListFiltered: sameCatList.filter(e => e.id !== selectedItemId)
    // })

    // console.log(selectedState.sameCatListFiltered);
    // console.log(sameCatList);

    // const [loader, setloader] = useState(false);

    // const cusChip = val => {
    //     return (
    //         <View style={globalStyles.chipView}>
    //             <Text style={globalStyles.chipText}>more</Text>
    //         </View>
    //     );
    // };
    // const titleHandler = val => {
    //     const title = val.length > 12 ? val.slice(0, 12) + '...' : val;
    //     return (
    //         <View
    //             style={{
    //                 justifyContent: 'space-between',
    //                 backgroundColor: 'yellow',
    //                 width: '100%',
    //                 flex: 3,
    //                 paddingHorizontal: 6,
    //                 paddingBottom: 6,
    //             }}>
    //             <Text style={globalStyles.text}>{title}</Text>
    //             {cusChip(val)}
    //         </View>
    //     );
    // };

    // const onSameCatPressHandler = (val) => {
    //     console.log(val)
    //     const selectedItem02 = sameCatList.filter(e => e.id === val);
    //     const sameCatListFiltered02 = sameCatList.filter(e => e.id === val);
    //     setSelectedState({

    //         selectedItem: selectedItem02,
    //         sameCatListFiltered: sameCatListFiltered02
    //     })
    //     console.log(selectedState.selectedItem)
    // }


    return (
        <SafeAreaView style={globalStyles.mainView}>
            {/* <View style={globalStyles.headerView}>
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
                ) : selectedState.sameCatListFiltered.length > 0 ? (
                    <ScrollView style={globalStyles.scrollView}>
                        <Text style={globalStyles.categoryHeading}>
                            {selectedState.selectedItem[0].category}
                        </Text>
                        <View style={styles.selectedItemView}>
                            <View style={styles.selectedItemUpperView}>
                                <View style={styles.selectedItemLeftView}>
                                    <Image
                                        resizeMode="contain"
                                        style={styles.selectedItemImage}
                                        source={{ uri: `${selectedState.selectedItem[0].image}` }}
                                    />
                                </View>
                                <View style={styles.selectedItemRightView}>
                                    <Text style={globalStyles.price}>
                                        ${selectedState.selectedItem[0].price}
                                    </Text>
                                    <Text style={globalStyles.text}>
                                        {selectedState.selectedItem[0].title}
                                    </Text>
                                </View>
                            </View>
                            <ScrollView style={styles.selectedItemLowerView}>
                                <View>
                                    <Text style={{ fontSize: 14, fontWeight: '600' }}>
                                        Description:
                                    </Text>
                                    <Text style={globalStyles.text}>
                                        {selectedState.selectedItem[0].description}
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={[globalStyles.cardView]}>
                            {selectedState.sameCatListFiltered.map((e, i) => (
                                <TouchableOpacity
                                    style={[globalStyles.cardUnit]}
                                    key={i}
                                    onPress={(e) => onSameCatPressHandler(e.id)}

                                >
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
                            ))
                            }
                        </View>
                    </ScrollView>
                ) : (
                    <Text style={{ alignSelf: 'center', alignContent: 'center' }}>
                        no data found
                    </Text>
                )}
            </View> */}
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
        marginRight: 15,
        flex: 2,
        // backgroundColor: "red",
    },
    selectedItemRightView: {
        flex: 6,
    },
    selectedItemLowerView: {
        height: '3%',
    },
    selectedItemImage: {
        height: '100%',
    },
});

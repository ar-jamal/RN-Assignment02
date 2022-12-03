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

export default function ItemDetails({ Navigation, route }) {
    const { selectedItemData } = params.selectedItem
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
    const [titleLenght, setTitleLength] = useState('');
    const cusChip = (val) => {
        return (
            <View style={styles.chipView}>
                <Text style={styles.chipText}>more</Text>
            </View>
        )
    }
    const titleHandler = (val) => {
        const title = val.length > 12 ? val.slice(0, 12) + "..." : val
        return (
            <View style={{ justifyContent: "space-between", backgroundColor: 'yellow', width: "100%", flex: 3, paddingHorizontal: 6, paddingBottom: 6 }}>
                <Text style={styles.text}>{title}</Text>
                {cusChip(val)}
            </View>

        );
    }

    return (
        <SafeAreaView style={styles.mainView}>
            <View style={styles.headerView}>
                <ImageBackground
                    style={styles.headerImage}
                    source={require("./Utils/Images/apiHeader.jpg")}
                >
                </ImageBackground>
            </View>
            {/* <Text>{listItems[0]?.title}</Text> */}
            <View style={styles.bodyView}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.cardView}>
                        {loader ? <Image
                            style={{ width: "40%", aspectRatio: 1, marginHorizontal: "45%", marginTop: "35%" }}
                            source={require("./Utils/Images/loader04.gif")}
                        />
                            : listItems.length > 0
                                ? listItems.map((e, i) => (
                                    <TouchableOpacity
                                        key={i}
                                        style={styles.cardUnit}
                                    >
                                        <View style={{ justifyContent: 'space-between', flex: 7 }}>

                                            <Image resizeMode='contain'
                                                style={styles.image}
                                                source={{ uri: `${listItems[i].image}` }}
                                            />
                                            <Text style={styles.price}>${e.price}</Text>
                                        </View>
                                        {titleHandler(e.title)}
                                    </TouchableOpacity>))
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
        // padding: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: cusColors.offWhite02,
    },
    scrollView: {
        width: "100%",
        // backgroundColor: "lightyellow",

    },
    cardView: {
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        padding: 4,
        // backgroundColor: "yellow",
        // opacity: .5,
    },
    cardUnit: {
        width: 85,
        height: 220,
        margin: 6,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
    },
    image: {
        width: 65,
        height: 130,
        // padding: 20,
        // backgroundColor: "yellow",
    },
    price: {
        fontSize: 14,
        fontWeight: "700"
    },
    text: {
        fontSize: 14
    },
    chipView: {
        width: 50,
        // aspectRatio: .5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: cusColors.NavyblueColor,
        margin: 2,
        padding: 2,
        borderRadius: 15,
    },
    chipText: {
        color: "white",

    }

})


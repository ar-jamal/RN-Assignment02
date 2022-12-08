import { StyleSheet } from "react-native"
import cusColors from "./colors"

const globalStyles = StyleSheet.create({
    mBottomTabStyle: {
        // justifyContent: "center",
        // height: 40,
        // padding: 5,
        backgroundColor: cusColors.blueColor,
        // color: cusColors.pur
    },
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
        padding: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: cusColors.lighSkyColor,
    },
    scrollView: {
        width: "100%",

        // backgroundColor: "lightyellow",

    },
    categoryHeading: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 8,
        textDecorationLine: "underline"
    },
    cardView: {
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        padding: 4,
        // backgroundColor: "yellowgreen",
        // opacity: .5,
    },
    cardUnit: {
        width: "21.95%",
        // width: 85,
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

export default globalStyles;
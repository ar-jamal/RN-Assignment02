import { StyleSheet } from "react-native"

const globalStyles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "lightyellow",
    },
    header: {
        width: "100%",
        flex: 3,
        backgroundColor: 'lightblue',
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 25,
        fontWeight: "450",
        alignSelf: 'center',
        color: "navyblue",
    },
    body: {
        width: "100%",
        flex: 7,
        backgroundColor: "pink",
        alignItems: "center",
    },
    input: {
        width: "100%",
        height: 38,
        marginBottom: "4%",
        padding: 6,
        fontSize: 11,
        backgroundColor: cusColors.greyColor,
        borderBottomWidth: 2,
        borderBottomColor: "#00000015"
    },
    butText: {
        fontSize: 14,
        fontWeight: "500",
        letterSpacing: 1.2,
        margin: 8,
        color: "blue",
    },
    linkText: {
        width: 80,
        fontWeight: '600',
        borderBottomWidth: 1.7,
        fontSize: 12,
        marginTop: 8,
        alignSelf: 'flex-end',
        color: "yellow",
        borderBottomColor: 'black',
    },
    icon: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#00000015",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    imageView: {
        width: 100,
        aspectRatio: 1,
        borderWidth: 2,
        borderRadius: 50
    }

})
export default globalStyles;
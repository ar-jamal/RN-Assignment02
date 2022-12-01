import React from 'react';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import cusColors from '../../Utils/colors';

export default function CusIcon(props) {
    const { source, } = props;
    return (
        <TouchableOpacity style={styles.iconView}>
            <Image
                style={styles.icon}
                source={source}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    iconView: {
        width: 40,
        height: 40,
        marginVertical: 4,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 7,
        // },
        // shadowOpacity: 0.43,
        // shadowRadius: 9.51,

        // elevation: 15,
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

    }
});

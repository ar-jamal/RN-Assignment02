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
        width: 35,
        height: 35,
        marginHorizontal: 4,
        // borderRadius: 20,
        // overflow: "hidden"
    },
    icon: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        // borderWidth: 1.5,
        borderColor: "black"
        
    }
});

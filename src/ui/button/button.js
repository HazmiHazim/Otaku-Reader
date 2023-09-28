import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";


const button = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        backgroundColor: colors.backgroundPrimary,
    },
    text: {
        fontSize: fonts.size.font12,
        lineHeight: 21,
        fontWeight: fonts.weight.normal,
        colors: colors.textWhite,
    },
});

export default button;
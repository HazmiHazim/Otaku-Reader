import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const input = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 16,
        borderRadius: 6,
        width: '80%',
        height: 55,
        backgroundColor: colors.textWhite,
    },
    text: {
        fontSize: fonts.size.font12,
        fontWeight: fonts.weight.normal,
        color: colors.textWhite,
    },
});

export default input;
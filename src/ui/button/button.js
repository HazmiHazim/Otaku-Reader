import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const button = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        width: '80%',
        height: 55,
        gap: 20,
        backgroundColor: colors.backgroundSecondary,
    },
    text: {
        fontSize: fonts.size.font14,
        fontWeight: fonts.weight.normal,
        color: colors.textWhite,
    },
});

export default button;
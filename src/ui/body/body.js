import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const body = StyleSheet.create({
    layout: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        margin: 0,
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundPrimary,
    },
});

export default body;
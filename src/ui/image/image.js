import React from "react";
import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const image = StyleSheet.create({
    layout: {
        width: width,
        height: height,
    },
});

export default image;
import React from "react";
import { TextInput, Button, View, StyleSheet, Image, Pressable, Text } from "react-native"
import body from "../ui/body/body";
import input from "../ui/input/input";
import button from "../ui/button/button";
import LinearGradient from "react-native-linear-gradient";
import colors from "../theme/colors";
import Icon from "react-native-vector-icons/Fontisto";
import fonts from "../theme/fonts";

const Login = ({navigation}) => {
    return (
        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={[colors.backgroundPrimary, colors.blackShadow]} style={body.layout}>
            <View style={styles.page}>
                <Image style={styles.imageStyle} source={require('./../assets/images/logo.png')} />
                <TextInput style={input.container} placeholder="Email Address" />
                <TextInput style={input.container} secureTextEntry={true} placeholder="Password" />
                <Pressable style={button.container} onPress={() => navigation.navigate('Home')}>
                    <Text style={button.text}>Login</Text>
                </Pressable>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                    <Text style={button.text}>OR</Text>
                    <View style={styles.line}></View>
                </View>
                <Pressable style={[button.container, { backgroundColor: colors.PersianRed }]}>
                    <Icon name="google" style={[button.text, {fontSize: fonts.size.font20}]} />
                    <Text style={button.text}>Sign in with Google</Text>
                </Pressable>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    imageStyle: {
        resizeMode: 'cover',
        width: '80%',
        height: '20%',
    },
    lineContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    line: {
        height: 1,
        width: '35%',
        backgroundColor: colors.textGray,
        marginVertical: 10,
    }
});

export default Login;
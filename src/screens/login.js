import React from "react";
import { TextInput, Button, View } from "react-native"
import body from "../ui/body/body";
import input from "../ui/input/input";
import button from "../ui/button/button";

const login = () => {
    return (
        <View style={body.layout}>
            <TextInput style={input.container} placeholder="Email Address" />
            <TextInput style={input.container} secureTextEntry={true} placeholder="Password" />
            <Button style={button.container} title="Login" />
        </View>
    );
}

export default login;
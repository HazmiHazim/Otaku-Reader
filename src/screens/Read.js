import React, {useState} from "react";
import { Dimensions, Platform, ScrollView, Text, View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors from "../theme/colors";
import body from "../ui/body/body";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import image from "../ui/image/image";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : 'my-3';

const Read = () => {
    let chapterName = "Chapter 137 - Indomitability";
    const prevChapter = "Prev Chapter";
    const nextChapter = "Next Chapter";
    const navigation = useNavigation();

    return (
        <LinearGradient start={{ x: 0.5, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
            colors={[colors.backgroundPrimary, colors.blackShadow]} style={body.layout}>
            <SafeAreaView className="absolute z-20 flex-row items-center bottom-4 left-8 rounded-full">
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: colors.persianRed }} className="flex items-center justify-center rounded-full p-1">
                    <Icon name="chevron-back-sharp" size={28} color="white" />
                </TouchableOpacity>
            </SafeAreaView>
            <ScrollView>
                {/** Chapter Action View */}
                <View className="flex flex-1 flex-column space-y-3 mt-8 px-4">
                    <TouchableOpacity style={{backgroundColor: colors.whiteShadow}} className="px-2 py-3 rounded">
                        <Text className="text-black text-xs">{chapterName.length > 60 ? chapterName.slice(0, 55) + '...' : chapterName}</Text>
                    </TouchableOpacity>
                    <View className="flex flex-row justify-between">
                        <TouchableOpacity style={{backgroundColor: colors.backgroundSecondary, height: height * 0.035}} className="flex-1 items-center justify-center rounded">
                            <Text className="text-white text-xs">{prevChapter}</Text>
                        </TouchableOpacity>
                        {/** Empty Space At The Middle */}
                        <View style={{flex: 0.1}}></View>
                        <TouchableOpacity style={{backgroundColor: colors.backgroundSecondary}} className="flex-1 items-center justify-center rounded">
                            <Text className="text-white text-xs">{nextChapter}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/** Read Section */}
                <View className="flex flex-1 items-center mt-4">
                    <Image source={require('./../assets/images/read1.png')} style={image.layout} />
                    <Image source={require('./../assets/images/read2.png')} style={image.layout} />
                    <Image source={require('./../assets/images/read3.png')} style={image.layout} />
                </View>

                {/** Chapter Action View */}
                <View className="flex flex-1 flex-column mt-4 mb-6 space-y-3 px-4">
                    <View className="flex flex-row justify-between">
                        <TouchableOpacity style={{ backgroundColor: colors.backgroundSecondary, height: height * 0.035 }} className="flex-1 items-center justify-center rounded">
                            <Text className="text-white text-xs">{prevChapter}</Text>
                        </TouchableOpacity>
                        {/** Empty Space At The Middle */}
                        <View style={{ flex: 0.1 }}></View>
                        <TouchableOpacity style={{ backgroundColor: colors.backgroundSecondary }} className="flex-1 items-center justify-center rounded">
                            <Text className="text-white text-xs">{nextChapter}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: colors.whiteShadow }} className="px-2 py-3 rounded">
                        <Text className="text-black text-xs">{chapterName.length > 60 ? chapterName.slice(0, 55) + '...' : chapterName}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Read;
import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import colors from "../theme/colors";
import body from "../ui/body/body";
import Icon from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/loading";

const { width, height } = Dimensions.get("window");

const Search = () => {
    const navigation = useNavigation();
    const [results, setResults] = useState([1, 2, 3, 4]);
    const [loading, setLoading] = useState(false);
    let mangaName = "One Punch Man - The Strongest Hero";

    return (
        <LinearGradient start={{ x: 0.5, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
            colors={[colors.backgroundPrimary, colors.blackShadow]} style={body.layout}>
            <SafeAreaView className="flex-1">
                <View className="flex mt-10 mb-3 px-4" style={{ width }}>
                    <View className="flex-row justify-center items-center rounded-full"
                        style={{ backgroundColor: colors.plumpGray }}>
                        <TouchableOpacity onPress={() => { }} className="ml-4">
                            <Icon name="search" size={20} color={colors.textGray} />
                        </TouchableOpacity>
                        <TextInput placeholder="Search for a manga" placeholderTextColor={colors.textGray}
                            className="px-2 py-2 flex-1 text-base font-semibold tracking-wider rounded-full text-white" />
                    </View>
                </View>

                {/** Search Result */}
                {loading ? (<Loading />) : (
                    results.length > 0 ? (
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }} className="space-y-3">
                            <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
                            <View className="flex-row justify-between flex-wrap">
                                {results.map((item, index) => {
                                    return (
                                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push("Manga", item)}>
                                            <View className="space-y-2 mb-4">
                                                <Image className="rounded-3xl" source={require('./../assets/images/manga.png')} style={{ width: width * 0.45, height: height * 0.22, resizeMode: 'stretch' }} />
                                                <Text className="text-neutral-300 ml-1">{mangaName.length > 22 ? mangaName.slice(0, 22) + '...' : mangaName}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    )
                                })}
                            </View>
                        </ScrollView>
                    ) : (
                        <View className="flex flex-col items-center justify-center" style={{ height: height * 0.6 }}>
                            <Image source={require('./../assets/images/noresults.png')} style={{ width: 128, height: 128 }} />
                            <Text className="text-white mt-2">No Results.</Text>
                        </View>
                    )
                )}
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Search;
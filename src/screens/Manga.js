import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, ScrollView, Dimensions, Platform, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import colors from "../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import body from "../ui/body/body";
import button from "../ui/button/button";
import ChapterList from "../components/chapterList";
import MangaList from "../components/mangaList";

var { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? '' : 'mt-3';

const Manga = () => {
    const { params: item } = useRoute();
    const [isFavourite, toggleFavourite] = useState(false);
    const [chapter, setChapter] = useState([1, 2, 3, 4, 5]);
    const [relatedManga, setRelatedManga] = useState([1, 2, 3, 4, 5]);
    const navigation = useNavigation();
    let mangaName = "One Punch Man - The Strongest Hero";
    useEffect(() => {
        // Call the mangadex api
    }, [item]);

    return (
        <LinearGradient start={{ x: 0.5, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
            colors={[colors.backgroundPrimary, colors.blackShadow]} style={body.layout}>
            <SafeAreaView className="absolute z-20 flex-row items-center bottom-4 left-8 rounded-full">
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: colors.persianRed }} className="flex items-center justify-center rounded-full p-1">
                    <Icon name="chevron-back-sharp" size={28} color="white" />
                </TouchableOpacity>
            </SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
                <View className="w-full">
                    <View>
                        <Image source={require('../assets/images/manga.png')} style={{ width, height: height * 0.45, resizeMode: "stretch" }} />
                        <LinearGradient start={{x: 0.5, y: 0}} end={{x:0.5, y: 1}}
                            colors={['rgba(0, 0, 0, 0)', 'rgba(54, 57, 73, 0.5)', 'rgba(54, 57, 73, 0.5)']}
                            style={{ width, height: height }} className="absolute bottom-0" />
                    </View>
                </View>

                {/** Manga Details */}
                <View style={{ marginTop: (height * 0.02) }} className="space-y-3">
                    {/** Manga Title */}
                    <Text className="text-white text-center text-3xl font-bold tracking-wider">{mangaName}</Text>
                    {/** Author, Artist, Status */}
                    <Text className="text-neutral-400 font-semibold text-base text-center">Author · One</Text>
                    {/** Genres */}
                    <View className="flex-row justify-center mx-4 space-x-2">
                        <Text className="text-neutral-400 font-semibold text-base text-center">Action ·</Text>
                        <Text className="text-neutral-400 font-semibold text-base text-center">Comedy ·</Text>
                        <Text className="text-neutral-400 font-semibold text-base text-center">Superhero</Text>
                    </View>
                    {/** Description */}
                    <Text className="text-neutral-400 mx-4 tracking-wide">
                        After rigorously training for three years, the ordinary Saitama has gained immense strength which allows him to take out anyone and anything with just one punch. He decides to put his new skill to good use by becoming a hero. However, he quickly becomes bored with easily defeating monsters, and wants someone to give him a challenge to bring back the spark of being a hero.
                        Upon bearing witness to Saitama's amazing power, Genos, a cyborg, is determined to become Saitama's apprentice. During this time, Saitama realizes he is neither getting the recognition that he deserves nor known by the people due to him not being a part of the Hero Association. Wanting to boost his reputation, Saitama decides to have Genos register with him, in exchange for taking him in as a pupil. Together, the two begin working their way up toward becoming true heroes, hoping to find strong enemies and earn respect in the process.
                    </Text>
                    {/** Chapter */}
                    <View>
                        <ChapterList navigation={navigation} chapter={chapter} />
                    </View>
                    {/** Related Manga */}
                    <MangaList title="Related Manga" hideSeeAll={true} data={relatedManga} />
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Manga;
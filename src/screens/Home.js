import React, { useState } from 'react';
import { Platform, StatusBar, Text, View, ScrollView } from "react-native";
import bottomNav from "../ui/bottom-nav/bottomNav";
import body from "../ui/body/body";
import Svg, { Path } from "react-native-svg";
import colors from "../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Fontisto";
import NewRelease from "../components/newRelease";
import MangaList from '../components/mangaList';

const ios = Platform.OS == 'ios';

const Home = () => {
    const [newRelease, setNewRelease] = useState([1, 2, 3]);
    const [popular, setPopular] = useState([1, 2, 3]);
    const [newManga, setNewManga] = useState([1, 2, 3]);

    return (
        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={[colors.backgroundPrimary, colors.blackShadow]} style={body.layout}>
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4 mt-10">
                    <Icon name="nav-icon-grid" size={30} color="white" />
                    <Text className="text-white text-3xl font-bold">HashManga</Text>
                    <Icon name="search" size={30} color="white" />
                </View>
            </SafeAreaView>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
                {/** Latest Chapter Release */}
                <NewRelease data={newRelease} />

                {/** Popular Manga */}
                <MangaList title="Popular Manga" data={popular} />

                {/** New Manga */}
                <MangaList title={"New Manga"} data={newManga} />
            </ScrollView>
        </LinearGradient>
    );
};

/* Bottom Bar
<Svg>
    <Path d="M-300,900 Q200,650 700,900" fill={colors.backgroundPrimary} />
    <Text style={bottomNav.content}>My Name is Jeff</Text>
</Svg>
*/

export default Home;
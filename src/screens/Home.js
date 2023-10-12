import React, { useEffect, useState } from 'react';
import { Platform, StatusBar, Text, View, ScrollView, TouchableOpacity } from "react-native";
import body from "../ui/body/body";
import colors from "../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Fontisto";
import NewRelease from "../components/newRelease";
import MangaList from '../components/mangaList';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';
import { fetchNewManga, fetchNewRelease, fetchPopularManga } from '../api/mangadb';
import { getAuthentication, getRefreshToken } from '../api/authenticate';

const ios = Platform.OS == 'ios';

const Home = () => {
    const [newRelease, setNewRelease] = useState([]);
    const [popular, setPopular] = useState([]);
    const [newManga, setNewManga] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        //apiAuthentication();
        //apiAuthenticationRefreshToken();
        getNewRelease();
        getPopularManga();
        getNewManga();
    }, []);

    /* Use for Authenticated API
    const apiAuthentication = async () => {
        const data = await getAuthentication();
        console.log("Authenticate: ", data);
    };

    const apiAuthenticationRefreshToken = async () => {
        const data = await getRefreshToken();
        console.log("New Token: ", data);
    }
    */

    const getNewRelease = async () => {
        const response = await fetchNewRelease();
        //console.log("New Release: ", response);
        if (response && response.data) setNewRelease(response.data);
        setLoading(false);
    };

    const getPopularManga = async () => {
        const response = await fetchPopularManga();
        //console.log("Popular Manga: ", response);
        if (response && response.data) setPopular(response.data);
    };
    
    const getNewManga = async () => {
        const response = await fetchNewManga();
        //console.log("New Manga: ", response);
        if (response && response.data) setNewManga(response.data);
    };

    return (
        <LinearGradient start={{ x: 0.5, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
            colors={[colors.backgroundPrimary, colors.blackShadow]} style={body.layout}>
            <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
                <StatusBar style="light" />
                <View className="flex-row justify-between items-center mx-4 mt-10">
                    <Icon name="nav-icon-grid" size={30} color="white" />
                    <Text className="text-white text-3xl font-bold">HashManga</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Icon name="search" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {loading ? (<Loading />) : (
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
                    {/** Latest Chapter Release */}
                    {newRelease.length > 0 && <NewRelease data={newRelease} />}

                    {/** Popular Manga */}
                    <MangaList title="Popular Manga" data={popular} />

                    {/** New Manga */}
                    <MangaList title="New Manga" data={newManga} />
                </ScrollView>
            )}
        </LinearGradient>
    );
};

/* Bottom Bar
<Svg className="flex-1 z-20 absolute bottom-0 left-0 right-0">
    <Path d="M-300,900 Q200,650 700,900" fill={colors.backgroundSecondary} />
</Svg>
*/

export default Home;
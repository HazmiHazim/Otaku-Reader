import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from "react-native";
import colors from "../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { COVER_IMAGE } from "../api/mangadb";


var { width, height } = Dimensions.get('window');

const MangaList = ({ title, data, hideSeeAll }) => {
    let mangaName = "One Punch Man - The Strongest Hero";
    const navigation = useNavigation();

    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                {!hideSeeAll && (
                    <TouchableOpacity>
                        <Text style={{ color: colors.starBlaze }} className="text-lg">See All</Text>
                    </TouchableOpacity>
                )}
            </View>
            {/** Movie Row */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}>
                {
                    data.map((item, index) => {
                        //console.log("Item Relationship: ", item.relationships);
                        let fileNameID = null;
                        if (item.relationships && Array.isArray(item.relationships)) {
                            const coverArt = item.relationships.find((relation) => relation.type === "cover_art");
                            if (coverArt) {
                                fileNameID = coverArt.attributes.fileName;
                                //console.log("Filename: ", fileNameID);
                            }
                        }

                        if (item.attributes && item.attributes.title) {
                            mangaName = item.attributes.title.en;
                            //console.log("manga Title: ", mangaName);
                        }

                        return [
                            <TouchableWithoutFeedback key={index}
                                onPress={() => navigation.push('Manga', item)}>
                                <View className="space-y-1 mr-4">
                                    <Image source={{uri: COVER_IMAGE(item.id, fileNameID)}}
                                        //source={require('./../assets/images/manga.png')}
                                        className="rounded-3xl" style={{ width: width * 0.33, height: height * 0.22 }} />
                                    <Text className="text-neutral-300 ml-1">{mangaName.length > 14 ? mangaName.slice(0, 14) + '...' : mangaName}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        ]
                    })
                }
            </ScrollView>
        </View>
    );
};

export default MangaList;
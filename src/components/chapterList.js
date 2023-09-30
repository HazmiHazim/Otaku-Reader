import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";

const ChapterList = ({ chapter, navigation }) => {
    let chapterName = "Chapter 137 - Indomitability";
    let dateReleased = "25 Sept 2022";

    return (
        <View className="my-6 mx-2">
            <Text className="text-white text-lg mx-4 mb-2">Chapter List</Text>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 15 }}>
                {chapter && chapter.map((volume, index) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Read', volume)} style={{backgroundColor: colors.backgroundSecondary}}
                            key={index} className="flex flex-row px-4 py-6 items-center justify-between my-2">
                            <Text className="text-white text-xs">{chapterName.length > 35 ? chapterName.slice(0, 35) + '...' : chapterName }</Text>
                            <Text className="text-white text-xs">{dateReleased}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </View>
    );
};

export default ChapterList;
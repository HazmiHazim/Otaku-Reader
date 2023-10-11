import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { COVER_IMAGE } from '../api/mangadb';

var { width, height } = Dimensions.get('window');

const NewRelease = ({ data }) => {
    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate('Manga', item);
    };

    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">New Release</Text>
            <Carousel data={data} renderItem={({item}) => <MangaCard item={item} handleClick={handleClick} />}
                firstIem={1} inactiveSlideOpacity={0.6} sliderWidth={width} itemWidth={width * 0.62}
                slideStyle={{display: 'flex', alignItems: 'center'}} />
        </View>
    );
};

const MangaCard = ({ item, handleClick }) => {

    let fileNameID = null;
    const coverArt = item.relationships.find((relation) => relation.type === "cover_art");
    if (coverArt) {
        fileNameID = coverArt.attributes.fileName;
        //console.log("Filename: ", fileNameID);
    };
    
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image source={{ uri: COVER_IMAGE(item.id, fileNameID) }}
                style={{ width: width * 0.6, height: height * 0.4 }} className="rounded-3xl" />
        </TouchableWithoutFeedback>
    );
};

export default NewRelease;
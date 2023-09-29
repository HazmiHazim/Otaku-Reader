import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

var { width, height } = Dimensions.get('window');

const NewRelease = ({ data }) => {
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Manga', item);
    }

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
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <Image source={require('./../assets/images/manga.png')}
                style={{ width: width * 0.6, height: height * 0.4 }} className="rounded-3xl" />
        </TouchableWithoutFeedback>
    );
};

export default NewRelease;
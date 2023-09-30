import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../theme/colors';

const { width, height } = Dimensions.get("window");

const Loading = () => {
    return (
        <View style={{height, width}} className="absolute flex-row justify-center items-center">
            <Progress.CircleSnail thickness={12} size={160} fill='none' color={colors.starBlaze} />
        </View>
    );
};

export default Loading;
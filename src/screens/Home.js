import { Text, View } from "react-native";
import bottomNav from "../ui/bottom-nav/bottom-nav";
import body from "../ui/body/body";
import Svg, { Path } from "react-native-svg";
import colors from "../theme/colors";
import LinearGradient from "react-native-linear-gradient";

const Home = () => {
    return (
        <LinearGradient start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={[colors.backgroundPrimary, colors.blackShadow]} style={body.layout}>
            <View style={bottomNav.container}>
                <Svg>
                    <Path d="M-300,900 Q200,650 700,900" fill={colors.backgroundPrimary} />
                    <Text style={bottomNav.content}>My Name is Jeff</Text>
                </Svg>
            </View>
        </LinearGradient>
    );
}

export default Home;
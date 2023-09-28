import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

const input = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 16,
        borderRadius: 6,
        height: 55,
        backgroundColor: colors.backgroundSecondary,
    },
    text: {
        fontSize: fonts.size.font12,
        lineHeight: 21,
        fontWeight: fonts.weight.normal,
        colors: colors.textWhite,
    },
});

export default input;
const { StyleSheet } = require("react-native");
const { default: colors } = require("../../theme/colors");
const { default: fonts } = require("../../theme/fonts");

const bottomNav = StyleSheet.create({
    container: {
        display: 'flex',
        width: 55,
        flex: 1,
        flexBasis: 200,
        borderColor: colors.darkKnight,
        backgroundColor: colors.backgroundPrimary,
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fonts.size.font12,
    },
});

export default bottomNav;
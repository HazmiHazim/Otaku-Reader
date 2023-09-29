const { StyleSheet } = require("react-native");
const { default: colors } = require("../../theme/colors");
const { default: fonts } = require("../../theme/fonts");

const bottomNav = StyleSheet.create({
    container: {
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        shadowColor: '#52006A',
    },
    content: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fonts.size.font16,
        color: colors.textWhite,
    },
});

export default bottomNav;
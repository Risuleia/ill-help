import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginTop: SIZES.small
    },
    responseWrapper: {
        flex: 1,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.quaternary,
        padding: SIZES.small,
        justifyContent: 'flex-end'
    },
    responseText: {
        color: COLORS.secondary,
        fontSize: SIZES.medium * 1.1,
        fontFamily: 'DMMedium'
    }
})

export default styles
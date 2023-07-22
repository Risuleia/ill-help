import { StyleSheet } from "react-native";
import { FONT, COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.gray,
        width: 'auto',
        zIndex: 10,
        margin: SIZES.small,
        right: 0,
        top: 0,
        overflow: 'hidden'
    },
    containerHidden: {
        position: 'absolute',
        display: 'none'
    },
    camera: {
        maxWidth: 200,
        width: 400,
        height: 200
    },
    toggleBtn: {
        width: 60,
        height: 60,
        flex: 1,
        position: 'absolute',
        left: 0,
        bottom: 0,
        margin: SIZES.small
    },
    toggleBtnImage: {
        width: '30%',
        height: '30%',
        tintColor: '#ffffff'
    }
})

export default styles
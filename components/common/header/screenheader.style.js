import { StyleSheet, Platform } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      android: {
        marginRight: 0
      },
      ios: {
        marginRight: 0
      },
      default: {
        marginRight: SIZES.xSmall
      }
    })
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;

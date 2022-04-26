import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: COLORS.black,
        borderTopColor: "transparent",
        height: Platform.OS === 'ios' ? 100 : 50,
    },
})

export default styles;
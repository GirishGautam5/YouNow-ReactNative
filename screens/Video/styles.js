import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  levelHeaderPoints: {
    backgroundColor: COLORS.lightGreen,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
  },
  leftArrow: {
    height: 20,
    width: 20,
    marginLeft: 20,
    marginRight: 5,
  },
  levelText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  imageView: {
    height: 310,
    backgroundColor: Platform.OS === "ios" ? null : COLORS.black,
  },
  video: {
    top: Platform.OS === "android" ? 50 : 0,
    width: "100%",
    height: 310,
  },
  guestsView: {
    flexDirection: "row",
    height: 60,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: COLORS.lightGray,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  person1: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  person1Area: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    flexDirection: "row",
  },
  person2Area: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    flexDirection: "row",
  },
  seperator: {
    height: 30,
    borderRightWidth: 1,
    borderRightColor: COLORS.gray1,
    alignItems: "center",
  },
  personText: {
    marginLeft: 15,
    fontSize: 14,
    color: COLORS.black,
  },
  like: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesText: {
    marginLeft: 10,
    color: COLORS.blue,
    marginTop: 5,
  },
  chatView: {
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  person1Chat: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatTextView: {
    marginLeft: 15,
  },
  personName: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: "600",
  },
  personChat: {
    color: COLORS.gray,
  },
});

export default styles;

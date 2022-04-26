import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  headerHome: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchImage: {
    width: 25,
    height: 25,
  },
  searchSpace: {
    paddingLeft: 20,
  },
  circle: {
    backgroundColor: COLORS.blue,
    borderRadius: 40,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  GText: {
    fontSize: 35,
    color: COLORS.white,
  },
  headerImages: {
    flexDirection: "row",
    marginRight: 25,
  },
  homeImages: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  imagesView: {
    width: SIZES.width,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackgroundStyles: {
    width: SIZES.width * 0.85,
    height: 200,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  textOnImage: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 150,
  },
  liveView: {
    backgroundColor: COLORS.raspberry,
    height: 25,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 170,
    marginLeft: 10,
  },
  editorChoice: {
    backgroundColor: COLORS.orange,
    height: 25,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginRight: 20,
  },
  liveText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  trendingText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "600",
  },
  imageBottomArea: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    marginBottom: 10,
    paddingHorizontal: SIZES.radius,
  },
  playNow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  playButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.blue,
  },
  playImage: {
    width: 15,
    height: 15,
    tintColor: COLORS.white,
  },
  playNowText: {
    color: COLORS.white,
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  stillWatching: {
    justifyContent: "center",
  },
  stillWatchingText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default styles;

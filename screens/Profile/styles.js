import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    height: 50,
    backgroundColor: COLORS.lightGreen,
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  leftImage: {
    height: 20,
    width: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  settings: {
    paddingLeft: 30,
  },
  headerText: {
    color: COLORS.white,
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    backgroundColor: COLORS.lightGreen,
    height: 200,
    justifyConten: "center",
    alignItems: "center",
  },
  younowText: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORS.white,
  },
  circle: {
    backgroundColor: COLORS.blue,
    borderRadius: 40,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  GText: {
    fontSize: 35,
    color: COLORS.white,
  },
  goLive: {
    backgroundColor: COLORS.lightGreen,
    height: 50,
    width: 150,
    borderRadius: 25,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  liveArea: {
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  star: {
    height: 20,
    width: 20,
    marginRight: 10,
    marginTop: 3,
  },
  levelName: {
    flexDirection: "row",
  },
  levelText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  video: {
    height: 25,
    width: 25,
  },
  liveText: {
    color: COLORS.white,
    fontSize: 18,
    paddingLeft: 5,
  },
  diamondsView: {
    marginTop: 25,
  },
  diamondButton: {
    backgroundColor: COLORS.lightGray,
    height: 55,
    marginHorizontal: 25,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  diamondLeft: {
    flexDirection: "row",
    marginLeft: 15,
  },
  diamondImage: {
    height: 25,
    width: 25,
  },
  diamondText: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 3,
    marginLeft: 5,
  },
  rightArrow: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
  fansArea: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  fansView: {
    flexDirection: "column",
    marginHorizontal: 15,
  },
  fansCount: {
    color: COLORS.gray1,
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 5,
  },
  fansText: {
    marginTop: 5,
    color: COLORS.gray,
    fontSize: 15,
    textTransform: "uppercase",
  },
});

export default styles;

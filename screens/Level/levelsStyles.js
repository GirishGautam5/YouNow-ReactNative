import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  levelSafeAreaView: {
    height: "100%",
    width: "100%",
  },
  levelHeader: {
    backgroundColor: COLORS.lightGreen,
    height: 50,
    justifyContent: "center",
  },
  levelText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  levelIndicator: {
    height: 250,
    backgroundColor: COLORS.lightGreen,
  },
  pointsButton: {
    height: 50,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonView: {
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  rightArrow: {
    height: 12,
    width: 12,
    marginTop: 3,
  },
  pointsText: {
    fontSize: 15,
    fontWeight: "600",
  },
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
  pointsBody: {
    marginTop: 25,
    alignItems: "center",
  },
  pointsCount: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "400",
  },
  seperator: {
    borderBottomColor: COLORS.gray1,
    borderBottomWidth: 1,
    marginHorizontal: 15,
    marginTop: 20,
  },
  headingText: {
    color: COLORS.gray,
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  options: {
    marginTop: 25,
  },
  levelOptionsImages: {
    width: 50,
    height: 50,
  },
  optionsView: {
    flexDirection: "row",
    marginLeft: 20,
    alignContent: "center",
    marginVertical: 10,
  },
  optionsText: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "600",
  },
  starView: {
    marginTop: 15,
    alignItems: "center",
  },
  starImage: {
    marginBottom: 10,
  },
});

export default styles;

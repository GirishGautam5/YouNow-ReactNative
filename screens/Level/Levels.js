import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import styles from "./levelsStyles";
import { icons } from "../../constants";

const Levels = ({ navigation }) => {
  const levelHeader = () => {
    return (
      <View style={styles.levelHeader}>
        <Text style={styles.levelText}>My Level</Text>
      </View>
    );
  };
  const levelIndicator = () => {
    return (
      <View style={styles.levelIndicator}>
        <View style={styles.starView}>
          <Image source={icons.award} style={styles.starImage} />
          <Text style={styles.levelText}>You are at Level 1</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Points")}
          style={styles.pointsButton}
        >
          <View style={styles.buttonView}>
            <Text style={styles.pointsText}>0 Experience Points</Text>
            <Image source={icons.right_arrow} style={styles.rightArrow} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const levelOptions = () => {
    return (
      <View style={styles.options}>
        <Text style={styles.headingText}>Levels get you</Text>
        <View style={styles.optionsView}>
          <Image source={icons.gold} style={styles.levelOptionsImages} />
          <Text style={styles.optionsText}>Higher Daily Bar Bonus</Text>
        </View>
        <View style={styles.optionsView}>
          <Image source={icons.coin} style={styles.levelOptionsImages} />
          <Text style={styles.optionsText}>Higher Status Level</Text>
        </View>
        <View style={styles.optionsView}>
          <Image source={icons.gifts} style={styles.levelOptionsImages} />
          <Text style={styles.optionsText}>Access to Exclusive Gifts</Text>
        </View>
      </View>
    );
  };
  const levelsUp = () => {
    return (
      <View style={styles.options}>
        <Text style={styles.headingText}>Levels up by</Text>
        <View style={styles.optionsView}>
          <Image source={icons.video} style={styles.levelOptionsImages} />
          <Text style={styles.optionsText}>BroadCasting</Text>
        </View>
        <View style={styles.optionsView}>
          <Image source={icons.gesture} style={styles.levelOptionsImages} />
          <Text style={styles.optionsText}>Guesting</Text>
        </View>
        <View style={styles.optionsView}>
          <Image source={icons.like} style={styles.levelOptionsImages} />
          <Text style={styles.optionsText}>Giving Likes</Text>
        </View>
        <View style={styles.optionsView}>
          <Image source={icons.eye} style={styles.levelOptionsImages} />
          <Text style={styles.optionsText}>Watching</Text>
        </View>
      </View>
    );
  };
  const optionsView = () => {
    return (
      <View style={styles.optionsView}>
        <Image source={icons.info} style={styles.levelOptionsImages} />
        <Text style={styles.optionsText}>Frequently Asked Questions</Text>
      </View>
    );
  };
  const contactUs = () => {
    return (
      <View style={styles.optionsView}>
        <Image source={icons.mail} style={styles.levelOptionsImages} />
        <Text style={styles.optionsText}>Get In Touch</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.levelSafeAreaView}>
      {levelHeader()}
      <ScrollView
        scrollEventThrottle={20}
        disableScrollViewPanResponder
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
      >
        {levelIndicator()}
        {levelOptions()}
        <View style={styles.seperator} />
        {levelsUp()}
        <View style={styles.seperator} />
        {optionsView()}
        <View style={styles.seperator} />
        {contactUs()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Levels;

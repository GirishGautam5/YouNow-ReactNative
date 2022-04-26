import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import styles from "./styles";
import { icons } from "../../constants";

const Profile = ({ navigation: { goBack } }) => {
  const [fansCount, setFansCount] = useState(0);

  const profileHeader = () => {
    return (
      <View style={styles.profileHeader}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => goBack()}>
            <Image source={icons.left_arrow} style={styles.leftImage} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Image source={icons.notification} style={styles.profileImage} />
          </TouchableOpacity>
          <View style={styles.settings}>
            <TouchableOpacity>
              <Image source={icons.settings} style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const profileBody = () => {
    return (
      <View style={styles.body}>
        <Text style={styles.younowText}>younow</Text>
        <View style={styles.circle}>
          <Text style={styles.GText}>G</Text>
        </View>
      </View>
    );
  };
  const liveArea = () => {
    return (
      <View style={styles.liveArea}>
        <View style={styles.levelName}>
          <Image source={icons.star} style={styles.star} />
          <Text style={styles.levelText}>1 Girish Reddy</Text>
        </View>
        <TouchableOpacity style={styles.goLive}>
          <Image source={icons.videoCircle} style={styles.video} />
          <Text style={styles.liveText}>Go Live</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const totalFans = () => {
    fansCount == 0 ? setFansCount(5) : fansCount;
    return (
      <View style={styles.fansArea}>
        <View style={styles.fansView}>
          <Text style={styles.fansCount}>{fansCount}</Text>
          <Text style={styles.fansText}>Fans</Text>
        </View>
        <View>
          <Text style={styles.fansCount}>{fansCount}</Text>
          <Text style={styles.fansText}>Fans</Text>
        </View>
      </View>
    );
  };
  const diamondsArea = () => {
    return (
      <View style={styles.diamondsView}>
        <TouchableOpacity onPress={() => {}} style={styles.diamondButton}>
          <View style={styles.diamondLeft}>
            <Image source={icons.diamond} style={styles.diamondImage} />
            <Text style={styles.diamondText}> 0 Diamonds</Text>
          </View>
          <Image source={icons.right_arrow} style={styles.rightArrow} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      {profileHeader()}
      <ScrollView style={{ marginBottom: 60 }}>
        {profileBody()}
        {liveArea()}
        {diamondsArea()}
        {totalFans()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

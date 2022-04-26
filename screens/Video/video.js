import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import Video from "react-native-video";
import styles from "./styles";
import { icons, images } from "../../constants";

const VideoScreen = ({ navigation: { goBack } }) => {
  const videoHeader = () => {
    return (
      <View style={styles.levelHeaderPoints}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image source={icons.left_arrow} style={styles.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.levelText}>Live Stream</Text>
      </View>
    );
  };
  const videoPlayer = () => {
    const videoSource =
      Platform.OS === "ios" ? images.video : images.earthVideo;
    return (
      <View style={styles.imageView}>
        <Video source={videoSource} style={styles.video} controls={false} />
      </View>
    );
  };
  const renderGuests = () => {
    return (
      <View style={styles.guestsView}>
        <TouchableOpacity style={styles.person1Area}>
          <Image source={images.person1} style={styles.person1} />
          <View>
            <Text style={styles.personText}>Jack Crown</Text>
            <View style={styles.likes}>
              <Image source={icons.like} style={styles.like} />
              <Text style={styles.likesText}>3425</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.seperator}></View>
        <TouchableOpacity style={styles.person2Area}>
          <Image source={images.person2} style={styles.person1} />
          <View>
            <Text style={styles.personText}>Will Smith</Text>
            <View style={styles.likes}>
              <Image source={icons.like} style={styles.like} />
              <Text style={styles.likesText}>1235</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderChatBox = (icon, name, message) => {
    return (
      <View style={styles.chatView}>
        <Image source={icon} style={styles.person1Chat} />
        <View style={styles.chatTextView}>
          <Text style={styles.personName}>{name}</Text>
          <Text style={styles.personChat}>{message}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      {videoHeader()}
      {videoPlayer()}
      {renderGuests()}
      <ScrollView style={{ marginBottom: 50 }}>
        {renderChatBox(
          images.person2,
          "Liam Livingstone",
          "Please continue the same episodes"
        )}
        {renderChatBox(images.person4, "Dewald Brewas", "I joined just now")}
        {renderChatBox(
          images.person5,
          "Marcus Stonis",
          "I want to join with you"
        )}
        {renderChatBox(
          images.person6,
          "David Miller",
          "I come here once in a while"
        )}
        {renderChatBox(
          images.person7,
          "Jos Butler",
          "I am the regular subscriber"
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoScreen;

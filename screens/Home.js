import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import { WatchingList } from "../components";
import { icons, images, dummyData } from "../constants";
import styles from "./homeStyles";

const Home = ({ navigation }) => {
  const renderHeaderArea = () => {
    return (
      <View style={styles.headerHome}>
        <TouchableOpacity
          style={styles.circle}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.GText}>G</Text>
        </TouchableOpacity>
        <View style={styles.headerImages}>
          <TouchableOpacity>
            <Image source={icons.barChart} style={styles.searchImage} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderImageSection = () => {
    return (
      <FlatList
        contentContainerStyle={{ marginTop: 25 }}
        data={dummyData.newSeason}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          <TouchableOpacity onPress={() => navigation.navigate("Play")}>
            <View style={styles.imagesView}>
              <ImageBackground
                source={item.thumbnail}
                resizeMode="cover"
                imageStyle={{ borderRadius: 15 }}
                style={styles.imageBackgroundStyles}
              >
                <View style={styles.textOnImage}>
                  <View style={styles.liveView}>
                    <Text style={styles.liveText}>Live</Text>
                  </View>
                  <View style={styles.editorChoice}>
                    <Text style={styles.trendingText}>Trending</Text>
                  </View>
                </View>
                <View style={styles.imageBottomArea}>
                  <View style={styles.playNow}>
                    <View style={styles.playButton}>
                      <Image
                        source={icons.play}
                        resizeMode="contain"
                        style={styles.playImage}
                      />
                    </View>
                    <Text style={styles.playNoewText}>Play Now</Text>
                  </View>
                  {item.stillWatching.length > 0 && (
                    <View style={styles.stillWatching}>
                      <Text style={styles.stillWatchingText}>
                        Still Watching
                      </Text>
                      <WatchingList profiles={item.stillWatching} />
                    </View>
                  )}
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>;
        }}
      />
    );
  };
  return (
    <SafeAreaView>
      {renderHeaderArea()}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {renderImageSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

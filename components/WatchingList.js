import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./WatchingListStyles";

const WatchingList = ({ profiles }) => {
  if (profiles.length <= 3) {
    return (
      <View style={styles.container}>
        {profiles.map((item, index) => {
          <View
            key={`profile-${index}`}
            style={index === 0 ? null : { marginLeft: -15 }}
          >
            <Image
              source={item.profiles}
              resizeMode="cover"
              style={styles.profileImage}
            />
          </View>;
        })}
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {profiles.map((item, index) => {
          if (index <= 2) {
            return (
              <View
                key={`profile-${index}`}
                style={index === 0 ? null : { marginLeft: -15 }}
              >
                <Image
                  source={item.profile}
                  resizeMode="cover"
                  style={styles.profileImage}
                />
              </View>
            );
          }
        })}
        <Text style={styles.watchingText}>+{profiles.length - 3}</Text>
      </View>
    );
  }
};

export default WatchingList;

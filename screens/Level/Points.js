import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import styles from "./levelsStyles";
import { icons } from "../../constants";

const Points = ({navigation: {goBack}}) => {
    const pointsHeader = ()=> {
        return(
            <View style={styles.levelHeaderPoints}>
                <TouchableOpacity onPress={()=> goBack()}>
                    <Image source={icons.left_arrow} style={styles.leftArrow}/>
                </TouchableOpacity>
                <Text style={styles.levelText}>My History</Text>
            </View>
        );
    };
    const pointsBody = ()=> {
        return(
            <View style={styles.pointsBody}>
                <Text style={styles.pointsText}>Experience Points</Text>
                <Text style={styles.pointsCount}>0.0000</Text>
            </View>
        );
    };
    return(
        <SafeAreaView>
            {pointsHeader()}
            {pointsBody()}
        </SafeAreaView>
    );
};

export default Points;
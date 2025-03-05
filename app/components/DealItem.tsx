import React from "react";
import { StyleSheet } from "react-native";
import { Image, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Typography } from "../theme/Typography";
import Colors from "../constants/Colors";

interface DealItemProps {
  rewards: boolean;
}

const DealItem: React.FC<DealItemProps> = ({ rewards }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/breakfast_and_brunch.png")}
          style={{ width: "100%", height: 150 }}
          resizeMode="cover"
        />
        {rewards && (
          <View style={styles.rewardTextContainer}>
            <Text style={styles.rewardText}>Spend US$20, save US$5</Text>
          </View>
        )}

        <Icon
          name="heart-outline"
          size={30}
          color={Colors.text.primary}
          style={styles.heartIcon}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={[Typography.body, { fontWeight: "500" }]}>
          Ice Cream Bar
        </Text>
        <Text style={styles.rating}>4.1</Text>
      </View>
      <Text style={Typography.paragraph}>$0.35 Delivery Fee 30-35 min</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  imageContainer: {
    position: "relative",
  },
  rewardTextContainer: {
    position: "absolute",
    top: 16,
    left: 0,
    backgroundColor: Colors.accent.green,
    paddingVertical: 4,
    paddingHorizontal: 20,
    zIndex: 1,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  rewardText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  heartIcon: {
    position: "absolute",
    top: 14,
    right: 8,
    color: "white",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
  },
  rating: {
    fontSize: 12,
    backgroundColor: Colors.background.gray,
    padding: 8,
    borderRadius: "50%",
  },
});

export default DealItem;

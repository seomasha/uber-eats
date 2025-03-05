import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import { Typography } from "../theme/Typography";
import NumberInput from "../components/NumberInput";

const { width, height } = Dimensions.get("window");

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/uber-eats-banner.jpeg")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={[styles.text, Typography.title]}>
        Use your Uber account to get started
      </Text>
      <View style={styles.numberInput}>
        <NumberInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: width,
    height: height * 0.6,
    top: 0,
  },
  text: {
    padding: 14,
  },
  numberInput: {
    paddingHorizontal: 14,
  },
});

export default LandingScreen;

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";
import RoundedButton from "../components/RoundedButton";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name="check"
          size={48}
          style={[
            styles.icon,
            { borderWidth: 5, borderColor: Colors.accent.blue },
          ]}
        />
      </View>
      <Text style={[Typography.subtitle, styles.subtitle]}>All set.</Text>
      <Text style={[Typography.paragraph, { paddingHorizontal: 24 }]}>
        You'll be signed into your account in a moment. If nothing happens,
        click continue.
      </Text>
      <View style={styles.buttonContainer}>
        <RoundedButton
          text="Continue"
          onPress={() => {}}
          trailingIcon="arrow-right"
          width={160}
          marginRight={0}
          dark
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 8,
    marginTop: 80,
  },
  iconContainer: {
    padding: 16,
  },
  icon: {
    borderRadius: 50,
    alignSelf: "flex-start",
    backgroundColor: Colors.text.primary,
    color: "white",
    padding: 16,
  },
  subtitle: {
    fontWeight: "500",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 16,
  },
});

export default WelcomeScreen;

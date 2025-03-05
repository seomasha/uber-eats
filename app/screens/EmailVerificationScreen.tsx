import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Typography } from "../theme/Typography";
import IconButton from "../components/IconButton";
import RoundedButton from "../components/RoundedButton";
import Colors from "../constants/Colors";
import OtpInput from "../components/OtpInput";

const EmailVerificationScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[Typography.subtitle, styles.header]}>
          Enter the 4-digit code sent to you at: johndoe@email.com
        </Text>
        <OtpInput />
        <Text
          style={[
            Typography.paragraph,
            { paddingHorizontal: 16, paddingBottom: 16, marginTop: 10 },
          ]}
        >
          Tip: Make sure to check your inbox and spam folders.
        </Text>
        <View style={styles.helperContainer}>
          <Text style={[styles.helperText, Typography.body]}>
            Log in with password
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <IconButton iconName="arrow-left" onPress={() => {}} />
        <RoundedButton
          text="Next"
          onPress={() => {}}
          trailingIcon="arrow-right"
          width="50%"
          marginRight={24}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  header: {
    paddingHorizontal: 16,
    marginTop: 48,
    fontWeight: "500",
  },
  buttons: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  helperContainer: {
    padding: 16,
    gap: 16,
  },
  helperText: {
    backgroundColor: Colors.background.gray,
    fontWeight: "500",
    padding: 10,
    borderRadius: 30,
    alignSelf: "flex-start",
  },
});

export default EmailVerificationScreen;

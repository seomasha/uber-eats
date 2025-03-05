import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Typography } from "../theme/Typography";
import PasswordInput from "../components/PasswordInput";
import Colors from "../constants/Colors";
import IconButton from "../components/IconButton";
import RoundedButton from "../components/RoundedButton";

const PasswordInputScreen: React.FC = () => {
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <View>
        <Text style={[Typography.subtitle, styles.header]}>
          Welcome back, John
        </Text>
        <View style={styles.passwordInput}>
          <PasswordInput
            placeholder="Please enter your password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.helperContainer}>
          <Text style={[styles.helperText, Typography.body]}>
            I've forgotten my password
          </Text>
          <Text style={[styles.helperText, Typography.body]}>
            I cant sign in
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <IconButton iconName="arrow-left" onPress={() => {}} />
        <RoundedButton
          text="Next"
          onPress={() => {}}
          trailingIcon="arrow-right"
          flex={0.5}
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
  passwordInput: {
    paddingHorizontal: 16,
    paddingVertical: 24,
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
  buttons: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default PasswordInputScreen;

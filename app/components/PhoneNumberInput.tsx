import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";

const PhoneNumberInput: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Text style={Typography.body}>+44</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Mobile number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border.gray,
    backgroundColor: Colors.background.gray,
    paddingHorizontal: 12,
    height: 50,
  },
  divider: {
    fontSize: 20,
    color: "white",
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default PhoneNumberInput;

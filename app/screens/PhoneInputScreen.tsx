import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Typography } from "../theme/Typography";
import CountryPicker from "../components/CountryPicker";
import PhoneNumberInput from "../components/PhoneNumberInput";
import RectangleButton from "../components/RectangleButton";
import HorizontalBreak from "../components/HorizontalBreak";

const PhoneInputScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={[Typography.subtitle, styles.header]}>
        Enter your mobile number
      </Text>
      <View style={styles.phoneNumber}>
        <CountryPicker />
        <PhoneNumberInput />
      </View>
      <RectangleButton
        text="Next"
        variant="filled"
        onPress={() => {}}
        trailingIcon="arrow-right"
      />
      <Text style={[Typography.paragraph, { paddingHorizontal: 20 }]}>
        By proceeding, you consent to get calls, Whatsapp or SMS messages,
        including by automated means, from uber and its affiliates to the number
        provided.
      </Text>
      <View style={{ paddingHorizontal: 20, paddingVertical: 8 }}>
        <HorizontalBreak />
      </View>
      <RectangleButton
        text="Continue with Google"
        variant="outlined"
        onPress={() => {}}
        leadingIcon={require("../../assets/images/Google.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 105,
  },
  header: {
    paddingHorizontal: 16,
    marginTop: 48,
    fontWeight: "500",
  },
  phoneNumber: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    gap: 16,
  },
});

export default PhoneInputScreen;

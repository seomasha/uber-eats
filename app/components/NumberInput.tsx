import React, { useState } from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { Typography } from "../theme/Typography";

const countries = [
  {
    label: "+44",
    value: "+44",
    flag: require("../../assets/images/flags/GB.png"),
  },
];

const NumberInput: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("+44");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Image source={countries[0].flag} style={styles.flag} />
        <Text style={[styles.countryCode, Typography.body]}>
          {selectedCountry}
        </Text>
        <Entypo
          name="chevron-down"
          size={18}
          color="black"
          style={styles.arrow}
        />
      </View>
      <Text style={styles.divider}>|</Text>
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="232 188 7651"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: Colors.background.gray,
    paddingHorizontal: 12,
    height: 50,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  flag: {
    width: 44,
    height: 29,
    marginRight: 5,
  },
  countryCode: {
    marginLeft: 5,
    marginRight: 5,
  },
  arrow: {
    marginLeft: 3,
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

export default NumberInput;

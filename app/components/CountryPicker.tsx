import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const countries = [
  {
    label: "+44",
    value: "+44",
    flag: require("../../assets/images/flags/GB.png"),
  },
];

const CountryPicker: React.FC = () => {
  const [selectedCountry] = useState(countries[0]);

  return (
    <View style={styles.container}>
      <Image source={selectedCountry.flag} style={styles.flag} />
      <Entypo
        name="chevron-down"
        size={18}
        color="black"
        style={styles.arrow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: Colors.background.gray,
    borderWidth: 1,
    borderColor: Colors.border.gray,
  },
  flag: {
    width: 44,
    height: 29,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
  },
  arrow: {
    marginLeft: 3,
  },
});

export default CountryPicker;

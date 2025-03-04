import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";
import { Typography } from "../theme/Typography";
import Icon from "react-native-vector-icons/MaterialIcons";

interface MenuItemProps {
  iconName: string;
  title: string;
  subtitle?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  iconName,
  title,
  subtitle,
}: MenuItemProps) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName} size={28} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={Typography.menuItem}>{title}</Text>
        <Text style={Typography.menuItemAccent}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    width: "100%",
  },
  icon: {
    marginRight: 10,
    color: Colors.text.primary,
  },
  textContainer: {
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.text.primary,
  },
});

export default MenuItem;

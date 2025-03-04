import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Typography } from "../theme/Typography";
import Colors from "../constants/Colors";

interface BottomBarItemProps {
  icon: string;
  text: string;
}

const BottomBarItem: React.FC<BottomBarItemProps> = ({
  icon,
  text,
}: BottomBarItemProps) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={32} style={styles.icon} />
      <Text style={Typography.bottomBarText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
  icon: {
    color: Colors.icon.gray,
  },
});

export default BottomBarItem;

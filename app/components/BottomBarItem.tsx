import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Typography } from "../theme/Typography";
import Colors from "../constants/Colors";

interface BottomBarItemProps {
  icon: string;
  text: string;
  focused: boolean;
}

const BottomBarItem: React.FC<BottomBarItemProps> = ({
  icon,
  text,
  focused,
}: BottomBarItemProps) => {
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        size={28}
        style={{
          color: focused ? Colors.text.primary : Colors.icon.gray,
        }}
      />
      <Text
        style={[
          Typography.bottomBarText,
          {
            color: focused ? Colors.text.primary : Colors.icon.gray,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
});

export default BottomBarItem;

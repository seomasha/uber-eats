import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";

interface IconButtonProps {
  onPress: () => void;
  iconName: string;
  size?: number;
  backgroundColor?: string;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onPress, iconName }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={24} color={Colors.text.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 56,
    height: 54,
    borderRadius: 28,
    backgroundColor: Colors.background.gray,
    borderColor: Colors.border.gray,
    borderWidth: 0.5,
  },
});

export default IconButton;

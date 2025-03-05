import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ButtonProps {
  text: string;
  onPress: () => void;
  leadingIcon?: string;
  trailingIcon?: string;
  width?: number | string; // Allow both number and string
  marginRight?: number;
  marginLeft?: number;
  dark?: boolean;
}

const RoundedButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  leadingIcon,
  trailingIcon,
  width = "100%",
  marginRight = 28,
  marginLeft = 28,
  dark = false,
}) => {
  const isSmallWidth = typeof width === "number" && width < 200; // Assuming small width if less than 200px

  return (
    <View
      style={[
        styles.container,
        { width: typeof width === "number" ? width : undefined },
      ]}
    >
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={styles.buttonContainer}>
          {leadingIcon && (
            <Icon name={leadingIcon} size={28} color={Colors.icon.dark_gray} />
          )}
          <Text
            style={[
              styles.buttonText,
              Typography.rectangleButtonText,
              {
                marginLeft: trailingIcon && isSmallWidth ? 0 : marginLeft,
                marginRight: leadingIcon && isSmallWidth ? 0 : marginRight,
                textAlign: isSmallWidth
                  ? leadingIcon
                    ? "left"
                    : trailingIcon
                    ? "right"
                    : "center"
                  : "center",
                color: dark ? Colors.text.primary : Colors.text.gray,
              },
            ]}
          >
            {text}
          </Text>
          {trailingIcon && (
            <Icon
              name={trailingIcon}
              size={28}
              color={dark ? Colors.text.primary : Colors.icon.dark_gray}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    justifyContent: "center",
    padding: 14,
    backgroundColor: Colors.background.gray,
    borderRadius: 30,
    borderColor: Colors.border.gray,
  },
  buttonText: {
    color: Colors.text.gray,
    textAlign: "center",
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default RoundedButton;

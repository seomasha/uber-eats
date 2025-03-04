import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";
import Icon from "react-native-vector-icons/MaterialIcons";

interface ButtonProps {
  text: string;
  onPress: () => void;
  leadingIcon?: string;
  trailingIcon?: string;
  variant: "filled" | "outlined";
}

const RectangleButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  leadingIcon,
  trailingIcon,
  variant,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              variant === "filled" ? Colors.text.primary : "transparent",
            borderWidth: variant === "outlined" ? 1 : 0,
            borderColor: Colors.text.primary,
          },
        ]}
        onPress={onPress}
      >
        <View style={styles.buttonContainer}>
          {leadingIcon && (
            <Icon
              name={leadingIcon}
              size={28}
              color={variant === "filled" ? "white" : Colors.text.primary}
            />
          )}
          <Text
            style={[
              styles.buttonText,
              Typography.rectangleButtonText,
              {
                marginLeft: trailingIcon ? 28 : 0,
                marginRight: leadingIcon ? 28 : 0,
                color: variant === "filled" ? "white" : Colors.text.primary,
              },
            ]}
          >
            {text}
          </Text>
          {trailingIcon && (
            <Icon
              name={trailingIcon}
              size={28}
              color={variant === "filled" ? "white" : Colors.text.primary}
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
    padding: 18,
    backgroundColor: Colors.text.primary,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default RectangleButton;

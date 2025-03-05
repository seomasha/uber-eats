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
  flex?: number;
  marginRight?: number;
  marginLeft?: number;
}

const RoundedButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  leadingIcon,
  trailingIcon,
  flex = 1,
  marginRight = 28,
  marginLeft = 28
}) => {
  const isSmallFlex = flex < 0.8;

  return (
    <View style={[styles.container, { flex }]}>
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
                marginLeft: trailingIcon && isSmallFlex ? 0 : marginLeft,
                marginRight: leadingIcon && isSmallFlex ? 0 : marginRight,
                textAlign: isSmallFlex
                  ? leadingIcon
                    ? "left"
                    : trailingIcon
                    ? "right"
                    : "center"
                  : "center",
              },
            ]}
          >
            {text}
          </Text>
          {trailingIcon && (
            <Icon name={trailingIcon} size={28} color={Colors.icon.dark_gray} />
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
    flex: 1,
    fontWeight: "700",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default RoundedButton;

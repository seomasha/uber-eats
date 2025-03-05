import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface ButtonProps {
  text: string;
  onPress: () => void;
  leadingIcon?: string | any; // Icon name as string or image as object
  trailingIcon?: string | any; // Icon name as string or image as object
  variant: "filled" | "outlined";
  iconColor?: string;
}

const RectangleButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  leadingIcon,
  trailingIcon,
  variant,
  iconColor,
}) => {
  const defaultColor = variant === "filled" ? "white" : Colors.text.primary;
  const appliedIconColor = iconColor || defaultColor;

  // Helper function to render icons or images
  const renderIcon = (icon: any) => {
    if (typeof icon === "string") {
      // Render icon using Icon component (for icon names)
      return <Icon name={icon} size={24} color={appliedIconColor} />;
    } else if (icon) {
      // Render image if it's an image object
      return <Image source={icon} style={styles.iconImage} />;
    }
    return null;
  };

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
          {leadingIcon && renderIcon(leadingIcon)}
          <Text
            style={[
              styles.buttonText,
              Typography.rectangleButtonText,
              {
                marginLeft: trailingIcon ? 28 : 0,
                marginRight: leadingIcon ? 28 : 0,
                color: defaultColor,
              },
            ]}
          >
            {text}
          </Text>
          {trailingIcon && renderIcon(trailingIcon)}
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
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default RectangleButton;

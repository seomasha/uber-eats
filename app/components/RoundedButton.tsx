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
}

const RoundedButton: React.FC<ButtonProps> = ({
  text,
  onPress,
  leadingIcon,
  trailingIcon,
}) => {
  return (
    <View style={styles.container}>
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
                marginLeft: trailingIcon ? 28 : 0,
                marginRight: leadingIcon ? 28 : 0,
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
    padding: 18,
    backgroundColor: Colors.background.gray,
    borderRadius: 30,
    borderColor: Colors.border.gray,
  },
  buttonText: {
    color: Colors.text.gray,
    textAlign: "center",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default RoundedButton;

import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";

const OtpInput: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = () => {
    setFocusedIndex(null);
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          onFocus={() => handleFocus(index)}
          onBlur={handleBlur}
          style={[
            styles.input,
            Typography.body,
            {
              borderColor:
                focusedIndex === index || digit
                  ? Colors.text.primary
                  : Colors.border.gray,
            },
          ]}
          maxLength={1}
          keyboardType="numeric"
          textAlign="center"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 16,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: Colors.background.gray,
    marginVertical: 24,
  },
});

export default OtpInput;

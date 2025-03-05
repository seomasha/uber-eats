import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";

interface CategoryItemProps {
  image: any;
  title: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ image, title }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.text, Typography.body]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.border.gray,
  },
  image: {
    maxWidth: 160,
    height: 100,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    marginVertical: 16,
    fontSize: 16,
  },
});

export default CategoryItem;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Typography } from "../theme/Typography";
import MenuItem from "../components/MenuItem";

const menuData = [
  { id: 1, title: "Orders", iconName: "bookmark-minus" },
  { id: 2, title: "Your favourites", iconName: "heart" },
  { id: 3, title: "Restaurant Rewards", iconName: "star-circle" },
  { id: 4, title: "Wallet", iconName: "wallet" },
  { id: 5, title: "Send a gift", iconName: "gift" },
  {
    id: 6,
    title: "Business preferences",
    iconName: "briefcase",
    subtitle: "Make work meals quicker and easier",
  },
  { id: 7, title: "Help", iconName: "gamepad-circle" },
  { id: 8, title: "Promotion", iconName: "tag" },
  {
    id: 9,
    title: "Uber pass",
    iconName: "ticket-account",
    subtitle: "Join free for 1 month",
  },
  { id: 10, title: "Deliver with Uber", iconName: "briefcase" },
  { id: 11, title: "Settings", iconName: "cogs" },
];

const MyProfile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/default-profile.jpeg")}
          style={styles.profilePhoto}
        />
        <Text style={Typography.ovalButtonText}>John Doe</Text>
      </View>
      <View style={styles.menuList}>
        {menuData.map((item) => (
          <MenuItem
            key={item.id}
            iconName={item.iconName}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </View>
      <Text
        style={{
          paddingHorizontal: 32,
          paddingVertical: 48,
          fontSize: 12,
        }}
      >
        About
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  profilePhoto: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  menuList: {
    flex: 1,
  },
});

export default MyProfile;

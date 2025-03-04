import { View } from "react-native";
import MenuItem from "./components/MenuItem";
import BottomBarItem from "./components/BottomBarItem";

export default function Index() {
  return (
    <View>
      <MenuItem title="Orders" subtitle="Test" iconName="restaurant" />
      <BottomBarItem icon="home" text="Home" />
    </View>
  );
}

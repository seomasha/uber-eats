import { View } from "react-native";
import MenuItem from "./components/MenuItem";
import BottomBarItem from "./components/BottomBarItem";
import RectangleButton from "./components/RectangleButton";
import RoundedButton from "./components/RoundedButton";
import IconButton from "./components/IconButton";

export default function Index() {
  return (
    <View>
      <MenuItem title="Orders" subtitle="Test" iconName="restaurant" />
      <BottomBarItem icon="home" text="Home" />
      <RectangleButton
        text="Next"
        onPress={() => alert("Filled Button Pressed")}
        trailingIcon="home"
        variant="filled"
      />
      <RectangleButton
        text="Next"
        onPress={() => alert("Filled Button Pressed")}
        trailingIcon="home"
        variant="outlined"
      />
      <RoundedButton
        text="Next"
        onPress={() => alert("Filled Button Pressed")}
        trailingIcon="home"
      />
      <IconButton
        onPress={() => console.log("Icon button pressed")}
        iconName="home"
      />
    </View>
  );
}

import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

interface SearchItemProps {
  title: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.gray,
    paddingVertical: 8,
    marginLeft: 12,
  },
});

export default SearchItem;

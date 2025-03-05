import { useState } from "react";
import { StyleSheet, View, TextInput, Text, ScrollView } from "react-native";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { Typography } from "../theme/Typography";
import CategoryItem from "../components/CategoryItem";
import { topCategories, allCategories } from "../data/categories";

const SearchCategoriesScreen = () => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon
          name="search"
          size={24}
          color={Colors.text.primary}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder={"Food, shopping, drinks, etc"}
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor={Colors.text.primary}
        />
      </View>

      <ScrollView style={styles.scrollContainer}>
        <Text style={[Typography.title, styles.header]}>Top categories</Text>
        <View style={styles.categoriesContainer}>
          {topCategories.map((category) => (
            <CategoryItem
              key={category.id}
              image={category.image}
              title={category.title}
            />
          ))}
        </View>
        <Text style={[Typography.title, styles.header]}>All categories</Text>
        <View style={styles.categoriesContainer}>
          {allCategories.map((category) => (
            <CategoryItem
              key={category.id}
              image={category.image}
              title={category.title}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: Colors.background.gray,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    fontSize: 16,
    paddingVertical: 0,
    flex: 1,
  },
  header: {
    fontWeight: "500",
    paddingVertical: 16,
  },
  scrollContainer: {
    flex: 1,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 16,
    marginTop: 16,
  },
});

export default SearchCategoriesScreen;

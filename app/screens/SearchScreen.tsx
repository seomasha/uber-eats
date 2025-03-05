import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  LayoutChangeEvent,
} from "react-native";
import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/Ionicons";
import { Typography } from "../theme/Typography";
import SearchItem from "../components/SearchItem";
import { allCategories } from "../data/categories";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [tabWidths, setTabWidths] = useState<{ [key: string]: number }>({});
  const [tabPositions, setTabPositions] = useState<{ [key: string]: number }>(
    {}
  );

  const tabs = ["All", "Restaurants", "Grocery", "Convenience"];

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleTabLayout = (event: LayoutChangeEvent, tab: string) => {
    const { width, x } = event.nativeEvent.layout;
    setTabWidths((prev) => ({ ...prev, [tab]: width }));
    setTabPositions((prev) => ({ ...prev, [tab]: x }));
  };

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

      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ flexDirection: "row" }}
        >
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => handleTabPress(tab)}
              onLayout={(event) => handleTabLayout(event, tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && { color: Colors.text.primary },
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.sliderBackground}>
        <View
          style={[
            styles.sliderBlock,
            selectedTab && tabWidths[selectedTab]
              ? {
                  width: tabWidths[selectedTab],
                  left: tabPositions[selectedTab],
                  backgroundColor: Colors.text.primary,
                }
              : {},
          ]}
        />
      </View>
      <ScrollView>
        <Text style={[Typography.paragraph, { padding: 16 }]}>
          Recent searches
        </Text>
        <View style={styles.searches}>
          <SearchItem title="Cafe" />
          <SearchItem title="Irish" />
        </View>
        <Text style={[Typography.paragraph, { padding: 16 }]}>
          Top Categories
        </Text>
        <View style={styles.searches}>
          {allCategories.map((category) => (
            <SearchItem key={category.id} title={category.title} />
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
  },
  tabText: {
    fontSize: 16,
    color: Colors.text.primary,
  },
  sliderBackground: {
    flexDirection: "row",
    marginTop: 5,
    height: 4,
    backgroundColor: Colors.background.gray,
    borderRadius: 2,
    position: "relative",
  },
  sliderBlock: {
    position: "absolute",
    height: "100%",
  },
  searches: {
    paddingHorizontal: 16,
    gap: 16,
  },
});

export default SearchScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../constants/Colors";
import { Typography } from "../theme/Typography";
import DealItem from "../components/DealItem";

const DealsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Offers");

  const renderContent = () => {
    if (selectedTab === "Offers") {
      return (
        <View>
          <ScrollView horizontal style={styles.scrollViewContainer}>
            <View style={styles.filterIconContainer}>
              <Icon name="filter" size={24} color={Colors.text.primary} />
            </View>
            <View style={styles.filterContainer}>
              <Icon name="motorbike" size={24} />
              <Text style={styles.filterText}>Pick-up</Text>
            </View>
            <View style={styles.filterContainer}>
              <Text style={styles.filterText}>Sort</Text>
              <Icon name="chevron-down" size={24} />
            </View>
            <Text style={styles.filterContainer}>Best overall</Text>
          </ScrollView>
          <ScrollView style={{ marginBottom: 64 }}>
            <DealItem rewards={true} />
            <DealItem rewards={true} />
            <DealItem rewards={true} />
            <DealItem rewards={true} />
          </ScrollView>
        </View>
      );
    } else if (selectedTab === "Rewards") {
      return (
        <View>
          <Text style={[Typography.subtitle, { fontWeight: "500" }]}>
            Earn restaurant rewards
          </Text>
          <ScrollView style={{ marginBottom: 64 }}>
            <DealItem rewards={false} />
            <DealItem rewards={false} />
            <DealItem rewards={false} />
            <DealItem rewards={false} />
          </ScrollView>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color={Colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Deals</Text>
        <View style={styles.emptySpace}></View>
        {/* Empty space to center the header text */}
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Offers" && styles.selectedTab]}
          onPress={() => setSelectedTab("Offers")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="tag" size={20} />
            <Text
              style={[
                styles.tabText,
                selectedTab === "Offers" && styles.selectedTabText,
              ]}
            >
              Offers
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === "Rewards" && styles.selectedTab]}
          onPress={() => setSelectedTab("Rewards")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="star-circle" size={20} />
            <Text
              style={[
                styles.tabText,
                selectedTab === "Rewards" && styles.selectedTabText,
              ]}
            >
              Rewards
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  backButton: {
    marginRight: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text.primary,
    flex: 1,
    textAlign: "center",
    marginRight: 16,
  },
  emptySpace: {
    width: 24,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.gray,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  selectedTab: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.text.primary,
  },
  tabText: {
    fontSize: 16,
    color: Colors.text.primary,
    marginLeft: 8,
  },
  selectedTabText: {
    color: Colors.text.primary,
  },
  contentContainer: {
    flex: 1,
  },
  scrollViewContainer: {
    gap: 32,
  },
  filterContainer: {
    backgroundColor: Colors.background.gray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginLeft: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 10,
  },
  filterIconContainer: {
    backgroundColor: Colors.background.gray,
    padding: 8,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    color: "white",
  },
  filterText: {
    fontSize: 14,
    color: Colors.text.primary,
    marginLeft: 8,
  },
});

export default DealsScreen;

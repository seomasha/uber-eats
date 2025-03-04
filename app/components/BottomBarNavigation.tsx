import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomBarItem from "../components/BottomBarItem";
import MyProfile from "../screens/MyProfile";

const Tab = createBottomTabNavigator();

const tabScreens = [
  { name: "Home", icon: "home", component: MyProfile },
  { name: "Browse", icon: "manage-search", component: MyProfile },
  { name: "Grocery", icon: "shopping-bag", component: MyProfile },
  { name: "Baskets", icon: "shopping-cart", component: MyProfile },
  { name: "Account", icon: "person", component: MyProfile },
];

const BottomBarNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
        },
        headerShown: false,
        tabBarIconStyle: {
          width: 100,
          height: 50,
        },
      }}
    >
      {tabScreens.map((screen) => (
        <React.Fragment key={screen.name}>
          <Tab.Screen
            name={screen.name}
            component={screen.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <BottomBarItem
                  icon={screen.icon}
                  text={screen.name}
                  focused={focused}
                />
              ),
              tabBarLabel: () => null,
            }}
          />
        </React.Fragment>
      ))}
    </Tab.Navigator>
  );
};

export default BottomBarNavigation;

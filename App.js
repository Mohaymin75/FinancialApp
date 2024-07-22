import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionsStackNavigator from "./Transaction/TransactionsStackNavigator";
import SummaryScreen from "./Summary/SummaryScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Transactions") {
              iconName = "list";
            } else if (route.name === "Summary") {
              iconName = "pie-chart";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Transactions"
          component={TransactionsStackNavigator}
          options={{ title: "Transactions" }}
        />
        <Tab.Screen
          name="Summary"
          component={SummaryScreen}
          options={{ title: "Summary" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

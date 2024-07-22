import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionsListScreen from "./TransactionsListScreen";
import TransactionDetailScreen from "./TransactionDetailScreen";

const Stack = createNativeStackNavigator();

const TransactionsStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TransactionsList"
      component={TransactionsListScreen}
      options={{ title: "Transactions List" }}
    />
    <Stack.Screen
      name="TransactionDetail"
      component={TransactionDetailScreen}
      options={{ title: "Transaction Detail" }}
    />
  </Stack.Navigator>
);

export default TransactionsStackNavigator;


import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const transactionData = [
  {
    id: "1",
    name: "Grocery",
    amount: 50,
    date: "2024-07-01",
    details: "Bought groceries from supermarket.",
  },
  {
    id: "2",
    name: "Rent",
    amount: 500,
    date: "2024-07-01",
    details: "Monthly rent payment.",
  },
  {
    id: "3",
    name: "Utilities",
    amount: 100,
    date: "2024-07-02",
    details: "Paid electricity bill.",
  },
  {
    id: "4",
    name: "Internet",
    amount: 60,
    date: "2024-07-03",
    details: "Monthly internet bill.",
  },
  {
    id: "5",
    name: "Dining",
    amount: 80,
    date: "2024-07-04",
    details: "Dinner at a restaurant.",
  },
];

const SummaryScreen = () => {
  const totalExpenses = transactionData.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );
  const highSpending = Math.max(
    ...transactionData.map((transaction) => transaction.amount)
  );
  const lowSpending = Math.min(
    ...transactionData.map((transaction) => transaction.amount)
  );

  const highSpendingTransaction = transactionData.find(
    (transaction) => transaction.amount === highSpending
  );
  const lowSpendingTransaction = transactionData.find(
    (transaction) => transaction.amount === lowSpending
  );

  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryText}>Total Expenses: ${totalExpenses}</Text>
      <View style={styles.summaryRow}>
        <Ionicons name="list-outline" size={24} color="black" />
        <Text style={styles.summaryText}>
          {" "}
          Number of Transactions: {transactionData.length}
        </Text>
      </View>
      <View style={styles.summaryRow}>
        <Ionicons name="trending-up-outline" size={24} color="green" />
        <Text style={styles.summaryText}>
          {" "}
          Highest Spending: {highSpendingTransaction.name} ($
          {highSpendingTransaction.amount})
        </Text>
      </View>
      <View style={styles.summaryRow}>
        <Ionicons name="trending-down-outline" size={24} color="red" />
        <Text style={styles.summaryText}>
          {" "}
          Lowest Spending: {lowSpendingTransaction.name} ($
          {lowSpendingTransaction.amount})
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: {
    flex: 1,
    padding: 20,
    margin: 10,
    backgroundColor: "#f0f8ff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#333",
  },
  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});

export default SummaryScreen;

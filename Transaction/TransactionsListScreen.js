import React from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";

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

const TransactionsListScreen = ({ navigation }) => {
  return (
    <FlatList
      data={transactionData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.transactionItem}
          onPress={() =>
            navigation.navigate("TransactionDetail", { transaction: item })
          }
        >
          <View style={styles.transactionRow}>
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>${item.amount}</Text>
          </View>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
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
  transactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  transactionDate: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
});

export default TransactionsListScreen;

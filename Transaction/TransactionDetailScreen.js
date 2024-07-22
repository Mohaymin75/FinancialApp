import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;
  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailText}>Name: {transaction.name}</Text>
      <Text style={styles.detailText}>Amount: ${transaction.amount}</Text>
      <Text style={styles.detailText}>Date: {transaction.date}</Text>
      <Text style={styles.detailText}>Details: {transaction.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
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
  detailText: {
    fontSize: 16,
    marginVertical: 5,
    color: "#333",
  },
});

export default TransactionDetailScreen;

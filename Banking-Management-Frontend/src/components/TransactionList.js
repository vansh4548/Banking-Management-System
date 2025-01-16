import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/accounts/transactions`)  // Ensure this endpoint is correct
      .then((response) => {
        console.log(response.data);  // Check the data structure in the browser console
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the transactions!", error);
      });
  }, []);

  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Account ID</th>  {/* Add Account ID Column */}
            <th>Amount</th>
            <th>Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>  {/* Corrected: transaction.id */}
              <td>{transaction.id}</td> {/* Display Transaction ID */}
              <td>{transaction.accountId}</td> {/* Display Account ID */}
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{new Date(transaction.timestamp).toLocaleString()}</td> {/* Display Timestamp */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;

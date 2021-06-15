import React from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";

function Expenses(props) {
  return (
    <Card className={"expenses"}>
      {props.expenseData &&
        props.expenseData.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
    </Card>
  );
}

export default Expenses;

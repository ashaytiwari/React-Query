import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState("");
  console.log(expenseFilter);

  const expenseFilterHandler = (filter) => {
    setExpenseFilter(filter);
  };

  return (
    <Card className={"expenses"}>
      <ExpensesFilter onExpenseFilterChange={expenseFilterHandler} />
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

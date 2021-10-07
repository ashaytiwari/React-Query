import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

function Expenses(props) {
  const [expenseFilter, setExpenseFilter] = useState("2020");

  const expenseFilterHandler = (filter) => {
    setExpenseFilter(filter);
  };

  const filteredExpense = props.expenseData.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseFilter;
  });

  return (
    <Card className={"expenses"}>
      <ExpensesFilter
        onExpenseFilterChange={expenseFilterHandler}
        selectdYear={expenseFilter}
      />
      <ExpenseChart expenses={filteredExpense} />
      <ExpensesList data={filteredExpense} />
    </Card>
  );
}

export default Expenses;

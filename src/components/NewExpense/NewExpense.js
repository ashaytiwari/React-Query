import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const saveExpenxeDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString()
    };
    props.onNewExpenseSave(expenseData);
  };

  return (
    <div className={"new-expense"}>
      <ExpenseForm onSaveExpenseData={saveExpenxeDataHandler} />
    </div>
  );
};

export default NewExpense;

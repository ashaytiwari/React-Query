import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import AddExpenseButton from "../AddExpenseButton/AddExpenseButton";

const NewExpense = (props) => {
  const [isExpenseFormShown, setIsExpenseFormShown] = useState(false);

  const saveExpenxeDataHandler = (enteredExpensedata) => {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random().toString()
    };
    props.onNewExpenseSave(expenseData);
  };

  return (
    <div className={"new-expense"}>
      {!isExpenseFormShown ? (
        <AddExpenseButton onExpenseFormShown={setIsExpenseFormShown} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenxeDataHandler}
          onExpenseFormShown={setIsExpenseFormShown}
        />
      )}
    </div>
  );
};

export default NewExpense;

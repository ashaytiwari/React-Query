import React from "react";

const AddExpenseButton = (props) => {
  const handleAddExpense = () => {
    props.onExpenseFormShown(true);
  };

  return (
    <div>
      <button onClick={() => handleAddExpense()}>Add New Expense</button>
    </div>
  );
};

export default AddExpenseButton;

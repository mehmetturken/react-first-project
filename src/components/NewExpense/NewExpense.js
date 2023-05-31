import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [isFieldVisible, setFieldVisible] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setFieldVisible(false);
    }

    const startEditingHandler = () => {
        setFieldVisible(true);
    }

    const stopEditingHandler = () => {
        setFieldVisible(false);
    }

    return (
        <div className="new-expense">
            {!isFieldVisible && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isFieldVisible && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;
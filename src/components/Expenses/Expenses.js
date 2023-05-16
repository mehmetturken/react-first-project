import React from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({ expensesArr }) => {
    return (
        <Card className="expenses">
            <ExpenseItem date={expensesArr[0].date} title={expensesArr[0].title} amount={expensesArr[0].amount} />
            <ExpenseItem date={expensesArr[1].date} title={expensesArr[1].title} amount={expensesArr[1].amount} />
            <ExpenseItem date={expensesArr[2].date} title={expensesArr[2].title} amount={expensesArr[2].amount} />
            <ExpenseItem date={expensesArr[3].date} title={expensesArr[3].title} amount={expensesArr[3].amount} />
        </Card>
    )
}

export default Expenses;
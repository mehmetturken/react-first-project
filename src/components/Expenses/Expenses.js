import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expensesArr }) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const handleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    const filteredExpenses = expensesArr.filter(item => new Date(item.date).getFullYear().toString() === filteredYear);

    console.log(filteredExpenses);

    let expenseContent = <p>No expense found!</p>;

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(item => {
            return (
                <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />
            )
        });
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter chosen={filteredYear} onFilterChange={handleFilterChange} />
                {expenseContent}
            </Card>
        </div>
    )
}

export default Expenses;
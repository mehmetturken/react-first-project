import React, { useState } from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expensesArr }) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const handleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    const filteredExpenses = expensesArr.filter(item => new Date(item.date).getFullYear().toString() === filteredYear);

    console.log(filteredExpenses);



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter chosen={filteredYear} onFilterChange={handleFilterChange} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;
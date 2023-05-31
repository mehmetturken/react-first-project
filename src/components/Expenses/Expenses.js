import React, { useState } from "react";

import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expensesArr }) => {

    const [filteredYear, setFilteredYear] = useState("2023");

    const handleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear);

    }

    const filteredExpenses = expensesArr.filter(item => new Date(item.date).getFullYear().toString() === filteredYear);

    console.log(filteredExpenses);



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter chosen={filteredYear} onFilterChange={handleFilterChange} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;
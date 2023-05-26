import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expensesArr }) => {

    const [filteredYear, setFilteredYear] = useState("2020");

    const handleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter chosen={filteredYear} onFilterChange={handleFilterChange} />
                <ExpenseItem date={expensesArr[0].date} title={expensesArr[0].title} amount={expensesArr[0].amount} />
                <ExpenseItem date={expensesArr[1].date} title={expensesArr[1].title} amount={expensesArr[1].amount} />
                <ExpenseItem date={expensesArr[2].date} title={expensesArr[2].title} amount={expensesArr[2].amount} />
                <ExpenseItem date={expensesArr[3].date} title={expensesArr[3].title} amount={expensesArr[3].amount} />
            </Card>
        </div>
    )
}

export default Expenses;
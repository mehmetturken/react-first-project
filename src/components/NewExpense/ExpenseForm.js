import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredTime, setEnteredTime] = useState(new Date());
    const [enteredAmount, setEnteredAmount] = useState(0);

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={(e) => setEnteredTitle(e.target.value)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min={0.01} step={0.01} onChange={(e) => {
                        // @ts-ignore
                        setEnteredAmount(e.target.value)
                        // console.log(enteredAmount)
                    }} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" max={2023 - 12 - 31} onChange={(e) => {
                        console.log(new Date(e.target.value))
                        setEnteredTime(new Date(e.target.value))
                    }} />
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;
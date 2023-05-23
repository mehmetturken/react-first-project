import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredTime, setEnteredTime] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: new Date()
    // });

    // const titleChangeHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: e.target.value
    // })

    /*<--------------------------->
    This is more advanced step to use previous state variables.
    */
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredTitle: e.target.value
    //     }
    // })
    // }

    // const amountChangeHandler = (e) => {
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: e.target.value
    // })

    //<--------------------------->
    // setUserInput((prevState) => {
    // return {
    // ...prevState,
    // enteredAmount: e.target.value
    // }
    // })
    // }

    // const dateChangeHandler = (e) => {
    // @ts-ignore
    // setUserInput({
    //     ...setUserInput,
    //     enteredDate: new Date(e.target.value)
    // })

    //<--------------------------->
    // setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         enteredDate: new Date(e.target.value)
    //     }
    // })
    // }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredTime)
        }
        console.log(expenseData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredTime('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={(e) => {
                        setEnteredTitle(e.target.value);
                    }} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min={0.01} step={0.01} onChange={(e) => {
                        // @ts-ignore
                        setEnteredAmount(e.target.value);
                    }} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                        value={enteredTime} min='2023 - 05 - 20' max='2023 - 12 - 31' onChange={(e) => {
                            setEnteredTime(e.target.value);
                        }} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
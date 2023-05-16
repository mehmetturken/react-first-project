import React from "react";

import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {

    const monthValue = date.getMonth();
    const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = monthNames[monthValue];

    return (
        <div className="expense-date">
            <div className="expense-date__month">
                {monthName}
            </div>
            <div className="expense-date__year">
                {date.getFullYear()}
            </div>
            <div className="expense-date__day">
                {date.getDate()}
            </div>
        </div>
    );
}

export default ExpenseDate;
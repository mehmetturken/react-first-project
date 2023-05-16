import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount }) => {

    const [item, setItem] = useState(title);

    const changeTitle = () => {
        setItem(item.length > 5 ? item.slice(0, 5) : item);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{item}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
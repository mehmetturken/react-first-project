import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount }) => {

    const [itemTitle, setItemTitle] = useState(title);

    const changeTitle = () => {
        setItemTitle('updated');
        console.log(itemTitle);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{itemTitle}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
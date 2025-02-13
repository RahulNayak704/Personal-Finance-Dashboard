import React from 'react';

const ExpenseList = ({ expenses }) => (
    <ul>
        {expenses.map((expense, index) => (
            <li key={index}>
                {expense.date}: {expense.category} - ${expense.amount} ({expense.description})
            </li>
        ))}
    </ul>
);

export default ExpenseList;

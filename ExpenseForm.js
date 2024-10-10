import React, { useState } from 'react';

const ExpenseForm = ({ setExpenses }) => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newExpense = { user_id: 1, amount, category, date: new Date().toISOString().split('T')[0], description };

        fetch('/add_expense', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newExpense)
        })
            .then(response => response.json())
            .then(() => {
                setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
                setAmount('');
                setCategory('');
                setDescription('');
            })
            .catch(error => console.error('Error adding expense:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;

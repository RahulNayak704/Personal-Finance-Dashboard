import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './styles.css';

const App = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch('/expenses/1')  // Assuming user ID is 1 for this example
            .then(response => response.json())
            .then(data => setExpenses(data))
            .catch(error => console.error('Error fetching expenses:', error));
    }, []);

    return (
        <div className="app-container">
            <h1>Personal Finance Dashboard</h1>
            <ExpenseForm setExpenses={setExpenses} />
            <ExpenseList expenses={expenses} />
        </div>
    );
};

export default App;

import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleAddHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountAddHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateAddHandler = (event) => {
        setEnteredDate(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleAddHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min={0.01} step="0.01" value={enteredAmount} onChange={amountAddHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min={2019-7-10} max={2025-6-28} value={enteredDate} onChange={dateAddHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
}

export default ExpenseForm;
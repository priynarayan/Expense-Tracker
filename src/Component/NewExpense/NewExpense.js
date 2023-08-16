import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props)=> {

    const saveExpenseDataHandler = (enteredExpense)=>{
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsClicked(false);
    };

    const[isClicked, setIsClicked] = useState(false);
    const isClickedHandler = () =>{
        setIsClicked(true);
    }

    const isCancelHandler = () =>{
        setIsClicked(false);
    }

    let content = <button type="submit" onClick={isClickedHandler}>Add New Expenses</button>
    if(isClicked){
        content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={isCancelHandler}/>
    }

    return(
        <div className="new-expense">
            {content}
        </div>
        
    )
}

export default NewExpense;
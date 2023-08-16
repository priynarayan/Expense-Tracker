import { useState } from "react";
import Expenses from "./Component/Expenses/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";


const DumExpenses = [
   {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
];

const App = () => {

  const[expenses, setExpenses] = useState(DumExpenses);


  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <h2><NewExpense onAddExpense={addExpenseHandler}/></h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;

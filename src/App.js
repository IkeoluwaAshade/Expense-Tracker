import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses'
import './App.css'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import Transaction from './Components/Transaction'

import { GlobalProvider } from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <Transaction />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
   
  );
}

export default App;
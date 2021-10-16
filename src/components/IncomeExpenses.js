import React, { useContext } from 'react'
import { GlobalContext  } from '../context/GlobalState'


const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
      .filter( transaction => transaction > 0)
      .reduce((acc, transaction) => acc += transaction, 0)
      .toFixed(2)

    //console.log(income)

    const expenses = amounts
      .filter( transaction => transaction < 0)
      .reduce((acc, transaction) => acc += transaction, 0)
      .toFixed(2)


    return (

        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus"> { income } </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{ expenses } </p>
        </div>
      </div>

    )
}

export default IncomeExpenses

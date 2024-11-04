import "../scss/incomeExpenseView.scss";

import { Link } from "react-router-dom";

import List from "./List";
import { useSelector } from "react-redux";

export default function IncomeExpenseView({ type }) {
  const totalIncome = useSelector((state) =>
    state.budget.income.reduce((acc, cur) => acc + cur.amount, 0)
  );
  const totalExpense = useSelector((state) =>
    state.budget.expense.reduce((acc, cur) => acc + cur.amount, 0)
  );

  const className = type === "income" ? "incomeContainer" : "expenseContainer";
  return (
    <div className={`${className} income_expense_view`}>
      <div className="heading">
        <h2>{type === "income" ? "Incomes" : "Expenses"}</h2>
      </div>
      <div className="total">
        Total - {type === "income" ? totalIncome : totalExpense}
      </div>

      <div className="income_expense_list">
        <ul className="list">
          <List type={type} />
        </ul>
      </div>
      <div className="btn-to-income_expense">
        {type === "income" ? (
          <Link to="./incomeView" className="incomeExpenseViewBtn">
            Track All incomes
          </Link>
        ) : (
          <Link to="./expenseView" className="incomeExpenseViewBtn">
            Track All Expenses
          </Link>
        )}
      </div>
    </div>
  );
}

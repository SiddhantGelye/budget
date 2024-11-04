import IncomeExpenseView from "../components/IncomeExpenseView";
import "../scss/mainBudget.scss";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import { useEffect } from "react";
import { getExpenses, getIncomes } from "../_lib/data-service";
import { setIsLoadingFalse, setIsLoadingTrue } from "../redux/appSlice";
import { addAllExpenses, addAllIncome } from "../redux/budgetSlice";

export default function BudgetMainApp() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getAllValues() {
      const incomes = await getIncomes();
      const expenses = await getExpenses();
      if (!incomes && !expenses) {
        setIsLoadingTrue();
      }
      if (incomes && expenses) {
        setIsLoadingFalse();
        dispatch(addAllIncome(incomes));
        dispatch(addAllExpenses(expenses));
      }
    }

    getAllValues();
  }, []);

  const isLoading = useSelector((state) => state.app.isLoading);
  const totalBudget = useSelector((state) => {
    const totalIncome = state.budget.income?.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );

    const totalExpense = state.budget.expense?.reduce(
      (acc, cur) => acc + cur.amount,
      0
    );

    return totalIncome - totalExpense;
  });
  if (isLoading) return <div>Loading....</div>;
  return (
    <div className="butget_main_app">
      <div className="budget_balance">
        <h2 className="budget_balance_heading">Balance</h2>
        <p className="budget_balance_value">&#8377; {totalBudget}</p>
      </div>

      <div className="form">
        <Form />
      </div>

      <div className="budgetContainer">
        <IncomeExpenseView type="income" />
        <IncomeExpenseView type="expense" />
      </div>
    </div>
  );
}

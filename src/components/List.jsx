import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import "../scss/incomeExpenseView.scss";
import { deleteExpenseItem, deleteIncomeItem } from "../redux/budgetSlice";
import { deleteExpense, deleteIncome } from "../_lib/data-service";

function List({ type }) {
  const incomes = useSelector((state) => state.budget.income);
  const expenses = useSelector((state) => state.budget.expense);
  const dispatch = useDispatch();

  if (!incomes || !expenses) return;

  function handleDelete(id, type) {
    console.log(id);
    if (type === "income") {
      console.log("income from list");
      deleteIncome(id);
      dispatch(deleteIncomeItem(id));
    }
    if (type === "expense") {
      console.log("expense from list");
      deleteExpense(id);
      dispatch(deleteExpenseItem(id));
    }
  }
  const incomeListElements = incomes.map((income) => {
    if (!income) return;
    return (
      <li className="list_element" key={income.id}>
        {/* <div> {income.date}</div> */}
        <div className="list_element_heading">{income.description}</div>
        <div className="list_element_amount">{income.amount}</div>
        <div className="list_element_delete_button">
          <button onClick={() => handleDelete(income.id, "income")}>
            <MdDeleteOutline className="delete_icon" />
          </button>
        </div>
      </li>
    );
  });

  const expenseListElement = expenses.map((expense) => {
    if (!expense) return;
    return (
      <li className="list_element" key={expense.id}>
        {/* <div> {expense.date}</div> */}
        <div className="list_element_heading">{expense.description}</div>
        <div className="list_element_amount">{expense.amount}</div>
        <div className="list_element_delete_button">
          <button onClick={() => handleDelete(expense.id, "expense")}>
            <MdOutlineDeleteOutline className="delete_icon" />
          </button>
        </div>
      </li>
    );
  });
  return <>{type === "income" ? incomeListElements : expenseListElement}</>;
}

export default List;

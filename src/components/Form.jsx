import { useState } from "react";
import { addExpense, addIncome } from "../redux/budgetSlice";
import { useDispatch } from "react-redux";
import { insertExpense, insertIncome } from "../_lib/data-service";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../scss/form.scss";

function Form() {
  const [description, setDesription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("income");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  function resetForm() {
    const inputDesc = document.getElementById("descriptionInput");
    const inputAmount = document.getElementById("amountInput");
    inputDesc.value = "";
    inputAmount.value = "";
    inputDesc.focus();
  }
  function onsubmit() {
    if (!description && !amount)
      throw new Error("Please add the description or Amount ");

    if (isNaN(amount)) {
      alert("please input the amount in numbers  ");
      resetForm();
      return;
    }
    const newObj = { description, amount, date };

    if (type === "income") {
      dispatch(addIncome(newObj));
      insertIncome(newObj);
    }
    if (type === "expense") {
      dispatch(addExpense(newObj));
      insertExpense(newObj);
    }

    resetForm();
    setDesription("");
    setAmount(0);
  }

  function handleSelect(e) {
    setType(e.target.value);
  }

  return (
    <div className="add">
      <select
        onChange={handleSelect}
        defaultValue={"income"}
        className="selectOption"
      >
        <option value="income" className="incomeSelect">
          Income
        </option>
        <option value="expense" className="expenseSelect">
          Expense
        </option>
      </select>

      <input
        id="descriptionInput"
        type="text"
        className="incomeExpenseDescription incomeExpenseInputDescription"
        placeholder="Add description here"
        onChange={(e) => setDesription(e.target.value)}
      />

      <input
        id="amountInput"
        type="text"
        className="incomeExpenseInput incomeExpenseInputDescription"
        placeholder="Add amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <div className="row">
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
      </div>

      <div className="addBtn" onClick={onsubmit}>
        ADD
      </div>
    </div>
  );
}

export default Form;

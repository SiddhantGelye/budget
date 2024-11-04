import { Link } from "react-router-dom";
import "../scss/home.scss";
import { getExpenses, getIncomes } from "../_lib/data-service";
import { useEffect } from "react";
import { addAllExpenses, addAllIncome } from "../redux/budgetSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoadingFalse, setIsLoadingTrue } from "../redux/appSlice";
import Login from "./Login";

export default function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="home">
      <h3>Your Budget Tracker </h3>
      {isLoggedIn ? (
        <Link className="start_app_button" to="/app">
          Start App
        </Link>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

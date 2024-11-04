import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./scss/app.scss";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

import BudgetMainApp from "./pages/BudgetMainApp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import IncomeView from "./pages/IncomeView";
import ExpenseView from "./pages/ExpenseView";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/app",
        element: <BudgetMainApp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "app/incomeView",
        element: <IncomeView />,
      },
      {
        path: "app/expenseView",
        element: <ExpenseView />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="app_container">
      <RouterProvider router={router} />
    </div>
  );
}

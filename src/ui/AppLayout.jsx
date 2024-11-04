import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loader from "./Loader";
import Footer from "./Footer";

import "../scss/app.scss";

export default function AppLayout() {
  const isLoading = useNavigation();

  {
    isLoading && <Loader />;
  }
  return (
    <div className="app">
      <Navbar />

      <main className="main_content">{<Outlet />}</main>

      <Footer />
    </div>
  );
}

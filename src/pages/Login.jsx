import { Link } from "react-router-dom";
import "../scss/login.scss";
export default function Login() {
  return (
    <div className="login">
      <Link to="/login" className="login_link">
        Login
      </Link>
    </div>
  );
}

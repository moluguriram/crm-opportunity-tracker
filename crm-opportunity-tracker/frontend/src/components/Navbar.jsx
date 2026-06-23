import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { logout } =
    useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "20px",
      }}
    >
      <Link to="/">Dashboard</Link>

      <Link to="/create">
        Add Opportunity
      </Link>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
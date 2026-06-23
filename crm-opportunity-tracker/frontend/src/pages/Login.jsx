import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } =
    useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } =
        await API.post(
          "/auth/login",
          form
        );

      login(data);

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              password:
                e.target.value,
            })
          }
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>
      </form>

      <br />

      <Link to="/register">
        Register
      </Link>
    </div>
  );
};

export default Login;
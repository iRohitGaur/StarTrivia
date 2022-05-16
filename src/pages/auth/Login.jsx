import { useState, useEffect } from "react";
import { isValidPassword } from "./validators";
import { useToast } from "utils/useToast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "reducers/userSlice";

const Login = ({ toggleLogin, setLoading }) => {
  const { loading } = useSelector((state) => state.user);
  const initialState = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState(initialState);
  const { email, password } = loginForm;
  const { sendToast } = useToast();
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setLoginForm((s) => ({
      ...s,
      email: e.target.value.toLowerCase(),
    }));
  };

  const handlePassword = (e) => {
    setLoginForm((s) => ({ ...s, password: e.target.value }));
  };

  const handleLogin = async (guest) => {
    if (isValidPassword(password) || guest) {
      dispatch(loginUser({ guest, email, password }));
    } else {
      sendToast("invalid email or password", true);
    }
  };

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  return (
    <>
      <input
        className="input_username"
        type="text"
        placeholder="username or email"
        value={email}
        onChange={(e) => handleEmail(e)}
      />
      <input
        className="input_password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => handlePassword(e)}
      />
      <button className="stg_btn" onClick={() => handleLogin(false)}>
        Login
      </button>
      <button className="stg_btn" onClick={() => handleLogin(true)}>
        Use Guest Login
      </button>
      <p className="toggle_auth">
        Don't have an account?{" "}
        <button className="signup_btn" onClick={() => toggleLogin()}>
          Signup
        </button>
      </p>
    </>
  );
};

export default Login;

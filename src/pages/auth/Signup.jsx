import { useState, useEffect } from "react";
import { isValidEmail, isValidPassword, isValidName } from "./validators";
import { useToast } from "utils/useToast";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "reducers/userSlice";

const Signup = ({ toggleLogin, setLoading }) => {
  const initialState = { name: "", email: "", password: "" };
  const { loading } = useSelector((state) => state.user);
  const [signupForm, setSignupForm] = useState(initialState);
  const { name, email, password } = signupForm;
  const { sendToast } = useToast();
  const dispatch = useDispatch();

  const handleName = (e) => {
    setSignupForm((s) => ({ ...s, name: e.target.value }));
  };

  const handleEmail = (e) => {
    setSignupForm((s) => ({ ...s, email: e.target.value.toLowerCase() }));
  };

  const handlePassword = (e) => {
    setSignupForm((s) => ({ ...s, password: e.target.value }));
  };

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  const handleSignup = () => {
    if (isValidName(name) && isValidEmail(email) && isValidPassword(password)) {
      dispatch(signupUser({ name, email, password }));
    } else {
      sendToast(
        "Name should be more than 3 characters.\n\nPassword should be more than 5 characters",
        true
      );
    }
  };

  return (
    <>
      <input
        className="input_name"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => handleName(e)}
      />
      <input
        className="input_email"
        type="email"
        placeholder="email"
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
      <button className="stg_btn" onClick={handleSignup}>
        Signup
      </button>
      <p className="toggle_auth">
        Already have an account?{" "}
        <button className="signup_btn" onClick={() => toggleLogin()}>
          Login
        </button>
      </p>
    </>
  );
};

export default Signup;

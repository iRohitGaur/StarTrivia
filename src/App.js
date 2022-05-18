import { Nav, RestrictedRoute } from "components";
import { Auth, Category, Home, Page404, Quiz } from "pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyUser } from "reducers/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("startrivia-user-token");
    if (token) {
      dispatch(verifyUser(token));
    }
  }, []);

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/quiz/:quizId" element={<Quiz />} />

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>

        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

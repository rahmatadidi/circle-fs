import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { LoginPage } from "./Pages/login-page";
import HomePage from "./Pages/home-page";
import { useEffect, useState } from "react";
import SearchPage from "./Pages/search-page";
import { RegisterPage } from "./Pages/register-page";
import { ApiHomePage } from "./libs/api";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import { SET_USER } from "./redux/slices/auth-slice";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const currentUser = useSelector((state: RootState) => state.auth).user;
  const dispatch = useDispatch();

  const PrivateRoute = () => {
    if (!isLoading) {
      if (currentUser.email) return <Outlet />;
      return <Navigate to={"/auth/login"} />;
    }
  };
  async function authCheck() {
    try {
      const response = await ApiHomePage.post(
        "/auth/check",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      dispatch(SET_USER(response.data));
      setIsLoading(false);
    } catch (error) {
      localStorage.removeItem("token");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.token;
    if (token) authCheck();
  }, []);
  return (
    <Routes>
      <Route path="auth/login" element={<LoginPage />}></Route>
      <Route path="auth/register" element={<RegisterPage />}></Route>
      <Route element={<PrivateRoute />}>
        <Route path="auth/homepage" element={<HomePage />}></Route>
        <Route path="auth/search" element={<SearchPage></SearchPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;

import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loyaut from "./Loyaut";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import AuthPage from "pages/AuthPage";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { useDispatch } from "react-redux";
import { currentUser } from "redux/auth/operation";

const ScreensPage = lazy(() => import('../pages/ScreensPage'))
 

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentUser())
  }, [dispatch])

  return <>
  <Routes>
<Route path="/" element={<Loyaut/>}>
<Route index element={<PrivateRoute component={<ScreensPage/>} redirectTo="/auth"/>}/>
</Route>

    <Route path="/auth" element={<RestrictedRoute component={<AuthPage/>} redirectTo="/"/>}/>
    <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/"/>}/>
    <Route path="/register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/"/>}/>
  </Routes>
  </>
};

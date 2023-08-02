import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loyaut from "./Loyaut";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import AuthPage from "pages/AuthPage";

const ScreensPage = lazy(() => import('../pages/ScreensPage'))
 

export const App = () => {
  return <>
  <Routes>
<Route path="/" element={<Loyaut/>}>
<Route index element={<ScreensPage/>}/>
</Route>

    <Route path="/auth" element={<AuthPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
  </Routes>
  </>
};

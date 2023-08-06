import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLogin, selectIsRefreshing } from "redux/auth/selectors"

const PrivateRoute = ({component: Component, redirectTo = "/"}) => {
const isLogin = useSelector(selectIsLogin);
const isRefreshing = useSelector(selectIsRefreshing);

const shouldReditect = !isLogin && !isRefreshing;

  return shouldReditect ? <Navigate to={redirectTo}/> : Component
}

export default PrivateRoute

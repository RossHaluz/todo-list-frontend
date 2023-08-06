import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { selectIsLogin } from "redux/auth/selectors"

const RestrictedRoute = ({component: Component, redirectTo = '/'}) => {
  const isLoging = useSelector(selectIsLogin);

  return isLoging ? <Navigate to={redirectTo}/> : Component
}

export default RestrictedRoute

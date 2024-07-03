import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { NavLink } from "react-router-dom";

export const PublicRoute = ( { children } ) => {

  const { logged } = useContext( AuthContext );

  return ( !logged )
    ? children
    : <NavLink to="/marvel" />

}

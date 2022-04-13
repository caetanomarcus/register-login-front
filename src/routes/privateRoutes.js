import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children, user}) => {

        if(!user) {
           return  <Navigate to="/" />
         } 
         return  children
      }

    export default PrivateRoutes;
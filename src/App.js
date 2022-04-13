import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setUserIsLoggedIn } from "./dataflow/reducer";
import { useGetVerifyQuery} from './dataflow/api'
import RoutesComponent from "./routes";
import { BrowserRouter } from 'react-router-dom'
import axios from "axios";

const token = localStorage.getItem("token")

function App() {
  const token = localStorage.getItem("token")
  const [isValidated, setIsValidated] = useState(false)
  const isLoggedIn = useSelector(state => state.user.user.isLoggedIn)
  const dispatch = useDispatch()

  const fetchData = async () => {
   if(token){
    axios.get("https://api-login-register-marc.herokuapp.com/auth/verify", {
      headers: {
        "x-access-token": token,
        "Content-Type": 'application/json',
      },
    }).then ( res => {
      dispatch(setUserIsLoggedIn(res.data.isValidate))
    }).catch(err => {
      console.log(err)
      localStorage.removeItem("token")
    }
    )
   }
  }


  useEffect(() => {
    fetchData();

  },)

  return (
    <BrowserRouter>
      <RoutesComponent user={isLoggedIn} />
    </BrowserRouter>
  );
}

export default App;

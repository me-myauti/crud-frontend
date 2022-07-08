import { Routes, Route, Link } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import CustomerRegister from "../pages/CustomerRegister";
import UserRegister from "../pages/UserRegister"

function App() {
  return (
    <Routes>
            <Route path="/" element={ <LoginPage />}/>
            <Route element={ <UserRegister /> }  path="/registerUser"/>
            <Route element={ <CustomerRegister /> }  path="/registerCustomer" />
      </Routes>
  )
}

export default App

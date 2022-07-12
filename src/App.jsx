import { Routes, Route, Link } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import CustomerRegister from "../pages/CustomerRegister";
import UserRegister from "../pages/UserRegister";
import HomeCrud from "../pages/HomeCrud";

function App() {
  return (
    <Routes>
            <Route path="/" element={ <LoginPage />}/>
            <Route element={ <UserRegister /> }  path="/registerUser"/>
            <Route element={ <CustomerRegister /> }  path="/registerCustomer" />
            <Route element={ <HomeCrud /> } path="/crudHome"/>
      </Routes>
  )
}

export default App

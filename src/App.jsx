import { Routes, Route } from "react-router-dom";
import LoginPage from '../pages/LoginPage';
import CustomerRegister from "../pages/CustomerRegister";
import UserRegister from "../pages/UserRegister";
import HomeCrud from "../pages/HomeCrud";
import UserCrud from "../pages/UserCrud"

function App() {
  return (
      <Routes>
              <Route path="/" element={ <LoginPage />}/>
              <Route element={ <UserRegister /> }  path="/registerUser"/>
              <Route element={ <CustomerRegister /> }  path="/registerCustomer" />
              <Route element={ <HomeCrud /> } path="/crudHome"/>
              <Route element={ <UserCrud /> }  path="/crudUser"/>
        </Routes>
  )
}

export default App

import "./styles.css";
import pswdToggle from "./togglePswd";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "../../services/axiosConf";


export default function UserRegister() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [contact, setContact] = useState('');

  let navigate = useNavigate()

  const submitUserRegister = async () => {
    axios.post("/createUser", {
      "nome": username,
      "cpf": cpf,
      "senha": password,
      "contato": contact,
      "admin": false
    }).then((res)=>{
      console.log(res)
      navigate("/")
    }).catch((err)=>{
      console.log(err);
      navigate("/")
    })
  }


  return (
    <div>
      <div className="wrapper">
        <form className="form-register">
          <h2 className="form-register-heading">Registrar Usuário</h2>
          <input
            type="text"
            className="form-control"
            name="user"
            placeholder="Usuário"
            required
            autoFocus=""
            autoComplete="off"
            maxLength="100"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Senha"
            required=""
            id="password"
            autoComplete="off"
            maxLength="256"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            name="cpf"
            placeholder="CPF"
            required=""
            autoFocus=""
            autoComplete="off"
            maxLength="14"
            onChange={(e)=>setCpf(e.target.value)}
          />

          <input
            type="text"
            className="form-control"
            name="contact"
            placeholder="Contato"
            required=""
            autoFocus=""
            autoComplete="off"
            maxLength="15"
            onChange={(e)=>setContact(e.target.value)}
          />

          <label className="checkbox">
            <input
              type="checkbox"
              onClick={pswdToggle}
              value="eyepassword"
              id="eyepassword"
              name="eyepassword"
            />
            Ver senha
          </label>

          <button className="button" onClick={submitUserRegister} type="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

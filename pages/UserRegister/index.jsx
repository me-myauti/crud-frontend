import "./styles.css";
import pswdToggle from "./togglePswd";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "../../services/axiosConf";


export default function UserRegister() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [contato, setContato] = useState('');
  let navigate = useNavigate()

  const submitUserRegister = async () => {
    axios.post("/createUser", {
      nome,
      cpf,
      senha,
      contato,
    }).then((res)=>{
      console.log(res)
      navigate("/")
    }).catch((err)=>{
      console.log(err.response.data);
      navigate("/registerUser")
    })
  }


  return (

      <div className="wrapper">
        <span>Teste Myauti</span>

        <form className="form-register">
          <h2 className="form-register-heading">Registrar Usuário</h2>
          <input
            type="text"
            className="form-control"
            name="nome"
            placeholder="Usuário"
            required
            autoFocus=""
            autoComplete="off"
            maxLength="100"
            onChange={(e)=>setNome(e.target.value)}
          />
          <input
            type="password"
            className="form-control"
            name="senha"
            placeholder="Senha"
            required=""
            id="password"
            autoComplete="off"
            maxLength="256"
            onChange={(e)=>setSenha(e.target.value)}
          />
          <input
            type="text"
            className="form-control"
            name="cpf"
            placeholder="CPF"
            required=""
            autoFocus=""
            autoComplete="off"
            maxLength="11"
            onChange={(e)=>setCpf(e.target.value)}
          />

          <input
            type="text"
            className="form-control"
            name="contato"
            placeholder="Contato"
            required=""
            autoFocus=""
            autoComplete="off"
            maxLength="15"
            onChange={(e)=>setContato(e.target.value)}
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
            Registrar
          </button>
        </form>
      </div>
  );
}

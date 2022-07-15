import './styles.css'
import axios from '../../services/axiosConf'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import pswdToggle from "./togglePswd";

export default function LoginPage(){
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('')
    let navigate = useNavigate()
    const handleUserSignIn = async () => {
      await axios.post("/authenticateUser", {
        cpf,
        senha
      }).then(()=>{
        navigate("/crudHome")
      }).catch((err)=>{
        setError(err.response.data.err)
        navigate("/")
      })
    }

    return(
        <div className="wrapper">
        <form className="form-register">
          <h2 className="form-register-heading">Login</h2>
          <input
            type="text"
            className="form-control"
            name="cpf"
            placeholder="Insira seu CPF"
            required
            autoFocus=""
            autoComplete="off"
            maxLength="11"
            onChange={(e)=>setCpf(e.target.value)}
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
            onChange={(e)=>setSenha(e.target.value)}
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
          <span className='danger'>{error}</span>

          <button className="button" onClick={handleUserSignIn} type="button">
            Entrar
          </button>
        </form>
      </div>
    )
}
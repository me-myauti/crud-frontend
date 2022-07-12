import "./styles.css";
import pswdToggle from "./togglePswd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../services/axiosConf";

export default function CustomerRegister() {
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cliente, setCliente] = useState("");
  const [emailEmpresa, setEmailEmpresa] = useState("");
  const [emailCliente, setEmailCliente] = useState("");
  const [senha, setSenha] = useState("");
  const [contato, setContato] = useState("");
  let navigate = useNavigate();

  return (
    <div className="wrapper">
      <form className="form-register">
        <h2 className="form-register-heading">Registrar Empresa</h2>
        <input
          type="text"
          className="form-control"
          name="empresa"
          placeholder="Empresa"
          required
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setEmpresa(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          name="cliente"
          placeholder="Cliente"
          required
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setCliente(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          name="cnpj"
          placeholder="CNPJ"
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="14"
          onChange={(e) => setCnpj(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          name="contato"
          placeholder="Contato"
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setContato(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          name="emailEmpresa"
          placeholder="Email da Empresa"
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="15"
          onChange={(e) => setEmailEmpresa(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          name="emailCliente"
          placeholder="Email do Cliente"
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setEmailCliente(e.target.value)}
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
          onChange={(e) => setSenha(e.target.value)}
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

        <button className="button" type="button">
          Registrar
        </button>
      </form>
    </div>
  );
}

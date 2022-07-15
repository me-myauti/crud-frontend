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
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const [contato, setContato] = useState("");
  const [error, setError] = useState("")
  let navigate = useNavigate();

  const submitCustomerRegister = async () => {
    await axios.post("/createCustomer", {
      titular: cliente,
      cnpj,
      email_hospedagem: emailEmpresa,
      senha_hospedagem: senha,
      email_empresa: emailCliente,
      nome_empresa: empresa,
      endereco,
      contato,
    }).then((res)=>{
      console.log(res)
      navigate("/")
    }).catch((err)=>{
      console.log(err)
      setError(err.response.data.err)
      navigate("/registerCustomer")
    })
  };

  return (
    <div className="wrapper">
      <form className="form-register">
        <h2 className="form-register-heading">Registrar Empresa</h2>
        <input
          type="text"
          className="form-control"
          name="empresa"
          placeholder="Nome da empresa"
          required
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setEmpresa(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          name="endereco"
          placeholder="Endereço da empresa"
          required
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setEndereco(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          name="cliente"
          placeholder="Nome do cliente"
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
          placeholder="Contato (Telefone)"
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setContato(e.target.value)}
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
          type="text"
          className="form-control"
          name="emailEmpresa"
          placeholder="Email de hospedagem"
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setEmailEmpresa(e.target.value)}
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
        <span className="danger">{error}</span>

        <button className="button" onClick={submitCustomerRegister} type="button">
          Registrar
        </button>
      </form>
    </div>
  );
}

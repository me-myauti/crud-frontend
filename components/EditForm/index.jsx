import { useEffect, useState } from "react";
import axios from "../../services/axiosConf.js";
import Times from "../../assets/Times/index.jsx";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function EditForm(props) {
  let navigate = useNavigate()
  const [userData, setUserData] = useState([])
  const [id, setId] = useState('')
  const [update, setUpdate] = useState(false)
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState("");
  const [cliente, setCliente] = useState("");
  const [emailEmpresa, setEmailEmpresa] = useState("");
  const [emailHosp, setEmailHosp] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contato, setContato] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    axios.post("/listUniqueCustomer", {
      id: props.identification
    }).then((res)=>{
      setId(res.data.id)
      setUserData(res.data)
      setEmpresa(res.data.nome_empresa)
      setCnpj(res.data.cnpj)
      setCliente(res.data.titular)
      setEndereco(res.data.endereco)
      setEmailEmpresa(res.data.email_empresa)
      setEmailHosp(res.data.email_hospedagem)
      setContato(res.data.contato)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err.response.data)
    })
  }, [update])

 
  const handleUpdate = () => {
    axios.post("/updateUser", {
      id,
      empresa,
      endereco,
      cliente,
      cnpj,
      contato,
      emailEmpresa,
      emailHosp,
    }).then(()=>{
      window.location.reload()
    }).catch((err)=>{
      console.log(err.response.data)
    })
  }

  return (
    <div className="wrapper">
      <form className="form-register">
        <div className="form-register-title">
          <h2>Atualizar Empresa</h2>
          <i onClick={props.onExit}>
            <Times />
          </i>
        </div>
        <input type="hidden" value={userData?.id}/>
        <input
          type="text"
          className="form-control"
          name="empresa"
          placeholder={userData?.nome_empresa}
          value={empresa}
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
          placeholder={userData?.endereco}
          value={endereco}
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
          value={cliente}
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
          value={cnpj}
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
          value={contato}
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
          value={emailHosp}
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setEmailHosp(e.target.value)}
        />

        <input
          type="text"
          className="form-control"
          name="emailHosp"
          placeholder="Email de hospedagem"
          value={emailEmpresa}
          required=""
          autoFocus=""
          autoComplete="off"
          maxLength="100"
          onChange={(e) => setEmailEmpresa(e.target.value)}
        />

        <span className="danger">{error}</span>

        <button className="button"  onClick={handleUpdate} type="button">
          Atualizar
        </button>
      </form>
    </div>
  );
}

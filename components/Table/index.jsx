import { useState } from "react";
import { useEffect } from "react";
import axios from "../../services/axiosConf";
import "./styles.css"

export default function Table() {
  const [customer, setCustomer] = useState([]);
  const [update, setUpdate] = useState(false);

  async function handleDelete(id){
    await axios.post("/deleteUser",{
      id
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err.response)
    })
  }

  useEffect(() => {
    axios
      .get("/listCustomers")
      .then((res) => {
        if(update == false){
          setUpdate(true);
        }else{
          setUpdate(false);
        }
        setCustomer(res.data);
      })
      .catch((err) => {
        setError(err.response.data.err);
      });
  }, [update]);

  return (
    <div className="table-container">
      <table class="table table-hover ">
        <thead class="table table-bordered table-dark">
          <tr>
            <th scope="col">Empresa</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Cliente</th>
            <th scope="col">Email da empresa</th>
            <th scope="col">Email do cliente</th>
            <th scope="col">Endereço</th>
            <th scope="col">Contato</th>
            <th scope="col" colspan="2"></th>
          </tr>
        </thead>
        {customer.map((c) => {
          return (
            <tbody>
              <tr>
                <td>{c.nome_empresa}</td>
                <td>{c.cnpj}</td>
                <td>{c.titular}</td>
                <td>{c.email_hospedagem}</td>
                <td>{c.email_empresa}</td>
                <td>{c.endereco}</td>
                <td>{c.contato}</td>
                <td>
                  <button type="button" class="btn btn-primary">
                    Editar
                  </button>
                </td>
                <td>
                  <button type="button" onClick={()=> handleDelete(c.id)} class="btn btn-danger">
                    Deletar
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

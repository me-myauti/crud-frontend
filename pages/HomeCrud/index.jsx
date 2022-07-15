import axios from "../../services/axiosConf";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";

import Cookies from 'js-cookie'

export default function HomeCrud() {
  const [customer, setCustomer] = useState([]);
  const [user, setUser] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const token = Cookies.get('token')
  useEffect(() => {
    axios
      .get("/listCustomers")
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => {
        setError(err.response.data.err);
      });

      axios.get("/listLoggedUser", {
        headers: {
          Authorization: "Bearer " + token
        }
      }).then((res)=>{
        setIsAuthenticated(true)
        setUser(res.data.nome)
      }).catch((err)=>{
        console.log(err)
      })
  }, []);

  return (
    <div className="container-home-crud">
      <div className="image-home-crud">
        <img src="https://nerdcia.com/logo/logo2.svg" alt="" />
        <h1>
          Nerd<span>&Cia</span>
        </h1>
      </div>
      <div className="text-home-crud">
        <h2>
          Bem vindo, <span>{user}!</span>
        </h2>
      </div>
      <div className="b-crud-home">
        <table class="table table-hover">
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
                    <button type="button" class="btn btn-danger">
                      Deletar
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

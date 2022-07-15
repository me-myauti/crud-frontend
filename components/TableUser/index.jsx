import { useState } from "react";
import { useEffect } from "react";
import axios from "../../services/axiosConf";

export default function TableUser(){
    const [user, setUser] = useState([]);

    useEffect(()=>{
        axios
        .get("/listUsers")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          setError(err.response.data.err);
        });
    }, [])
    return(
        <table class="table table-hover">
          <thead class="table table-bordered table-dark">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Contato</th>
              <th scope="col" colspan="2"></th>
            </tr>
          </thead>
          {user.map((u) => {
            return (
              <tbody>
                <tr>
                  <td>{u.nome}</td>
                  <td>{u.cpf}</td>
                  <td>{u.contato}</td>
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
    )
}
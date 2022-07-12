import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
export default function HomeCrud() {
  return (
    <div className="b-crud-home">
      <table class="table table-hover">
        <thead class=" table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Empresa</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Cliente</th>
            <th scope="col">Email da empresa</th>
            <th scope="col">Email do cliente</th>
            <th scope="col">Endereço</th>
            <th scope="col">Contato</th>
            <th scope="col">Ações</th>

            <th scope="col" colspan="2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>suzano</td>
            <td>123456789</td>
            <td>Romildo</td>
            <td>suzano@gmail.com</td>
            <td>Romildo@gmail.com</td>
            <td>Jardim morumbi</td>
            <td>67 999999999</td>

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
          <tr>
            <th scope="row">2</th>
            <td>suzano</td>
            <td>123456789</td>
            <td>Romildo</td>
            <td>suzano@gmail.com</td>
            <td>Romildo@gmail.com</td>
            <td>Jardim morumbi</td>
            <td>67 999999999</td>

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
          <tr>
            <th scope="row">3</th>
            <td>suzano</td>
            <td>123456789</td>
            <td>Romildo</td>
            <td>suzano@gmail.com</td>
            <td>Romildo@gmail.com</td>
            <td>Jardim morumbi</td>
            <td>67 999999999</td>

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
          <tr>
            <th scope="row">4</th>
            <td>suzano</td>
            <td>123456789</td>
            <td>Romildo</td>
            <td>suzano@gmail.com</td>
            <td>Romildo@gmail.com</td>
            <td>Jardim morumbi</td>
            <td>67 999999999</td>

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
          <tr>
            <th scope="row">5</th>
            <td>suzano</td>
            <td>123456789</td>
            <td>Romildo</td>
            <td>suzano@gmail.com</td>
            <td>Romildo@gmail.com</td>
            <td>Jardim morumbi</td>
            <td>67 999999999</td>
           
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
      </table>
    </div>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Table from "../../components/Table"
import NerdHeader from "../../components/NerdHeader"

export default function HomeCrud() {
  return (
    <div>
     <NerdHeader btnNome="Adicionar Empresa" />
     <div className="tableInfo">
      <Table />
     </div>
    </div>
  );
}

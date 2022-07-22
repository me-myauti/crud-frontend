import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import axios from "../../services/axiosConf";
import Table from "../../components/Table"
import NerdHeader from "../../components/NerdHeader";
import { useState } from "react";
import { useEffect } from "react";
import EditForm from '../../components/EditForm'


export default function HomeCrud() {
  const [editing, setEditing] = useState(true)
  const [customer, setCustomer] = useState([])
  const [update, setUpdate] = useState(false);
  const [selectedId, setSelectedId] = useState('')
  const toggleEditing = (e) => {
   setSelectedId(e.target.id)
   editing ? setEditing(false) : setEditing(true)
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
    !editing ? 
    <div>
      <NerdHeader  nameClass="invisible" btnNome="Adicionar Empresa"/>
      
      <div className="tableInfo">
        <EditForm onExit={toggleEditing} identification={selectedId} />
      </div>
    </div>
    :
    <div>
     <NerdHeader btnNome="Adicionar Empresa"/>
     <div className="tableInfo">
      <Table data={customer} edit={toggleEditing}/>
     </div>
    </div>
  );
}

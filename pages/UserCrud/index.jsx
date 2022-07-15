import NerdHeader from "../../components/NerdHeader"
import TableUser from "../../components/TableUser"

export default function UserCrud(){
    return(
        <div>
            <NerdHeader btnNome="Adicionar Usuário"/>
            <TableUser />
        </div>
    )
}
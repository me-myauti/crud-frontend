import Cookies from 'js-cookie'
import { useState } from "react";
import { useEffect } from "react";
import axios from "../../services/axiosConf";
import "./style.css"

export default function NerdHeader(props) {
    const [user, setUser] = useState([])
    const token = Cookies.get('token')

    useEffect(() => {
        axios.get("/listLoggedUser", {
          headers: {
            Authorization: "Bearer " + token
          }
        }).then((res)=>{
          console.log(res.data.nome)
          setUser(res.data.nome)
        }).catch((err)=>{
          console.log(err)
        })
    }, []);

  return (
    <header className="headers">
        <div>
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
        </div>
        <div className="header-button">
            <button>{props.btnNome}</button>
        </div>
    </header>
  );
}

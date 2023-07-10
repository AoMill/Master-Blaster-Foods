import { useNavigate } from "react-router-dom";
import style from "./Nav.module.css"
import { useCarrinhoContext } from "../../common/contexts/Card";
import { VscArrowLeft } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { UsuarioContext } from "../../common/contexts/Usuario";

export default function Navegador() {
  const {quantCar}= useCarrinhoContext()
  const {nome} = useContext(UsuarioContext)
  const Navigate = useNavigate("/menu");
  const handlerClick = () =>{
    Navigate('/')
  }
  const handlerClickCar = () =>{
    Navigate('/carrinho')
  }

  return (
    <section>
        <nav>
          <div className={style.voltar} >
         <VscArrowLeft onClick={handlerClick} /> 
          </div>
          <div className={style.nome}>
            <span>Bem vindo, {nome}!</span>
          </div>
          <div className={style.carrinh} disabled={quantCar === "0"} >
          <span className={style.numero} >
            {quantCar }
          </span>
          <BsCart4   onClick={handlerClickCar} ></BsCart4>
          </div>
        </nav>
    </section>
  )
}

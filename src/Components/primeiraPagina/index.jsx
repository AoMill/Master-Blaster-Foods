import {  useNavigate } from 'react-router-dom';
import style from "./PrimeiraPagina.module.css"
import imagem from "../logo/Logo.png"
import { useContext } from 'react';
import { UsuarioContext } from '../../common/contexts/Usuario';
export default function PrimeiraPagina() {
  const {nome, setNome} = useContext(UsuarioContext)
  const Navigate = useNavigate("/menu");

  const handlerClick = () =>{
    Navigate('/menu')
  }
  return (
    
    <>
      <main className={style.corfundo}>
        <div className={style.container}>
          <img src={imagem} alt=""/>
          <input type={"text"} value={nome} onChange={(e) => setNome(e.target.value)}
           placeholder="Digite o seu nome:"  required/>
          <button className={style.botao} onClick={handlerClick} disabled={nome.length < 4}>Faça o seu Pedido!</button>
        </div>
      </main>
    </>
  )
}

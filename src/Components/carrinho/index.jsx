import { useNavigate } from 'react-router-dom';
import { useCarrinhoContext } from '../../common/contexts/Card'
import QuantidadeCarrinho from '../quantidadeCarrinho'
import style from './Carrinho.module.css'
import { VscArrowLeft } from "react-icons/vsc"
import { BsCheckCircle} from "react-icons/bs"
import { BsFillEmojiHeartEyesFill } from "react-icons/bs"
import { useContext, useReducer } from 'react';
import { UsuarioContext } from '../../common/contexts/Usuario';

const initialState = {
    Fim: `${style.fim}`
}
function reducer(state, action) {
    switch (action.type) {
        case 'showfinalizar':
        return {
            ...state,
            Fim: `${style.final}`
        }
        default:
            return state
    }   
}

export default function ItemCarrinho() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const Navigate = useNavigate("/carrinho");
    const {quantCar,valorTotal,reset } = useCarrinhoContext()
    const {Reset} = useContext(UsuarioContext)
    const atual = Object.values({valorTotal})
    const emReal= atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const handlerClick = () =>{
      Navigate('/menu')
    }
    const finalizacaoCompra = () =>{
        Navigate('/')
        reset() 
        Reset()
    }

  
    return (
        <section className={style.corfundo}>
            <main className={style.container}>
                <div className={style.navBar}>
                    <VscArrowLeft onClick={handlerClick } />
                </div>
                <article className={style.carrinho}> 
                    <div >  
                        <span  className={quantCar=== 0 ? `${style.msg}`: `${style.msgDois}`}>Não contém itens no carrinho. </span>      
                        <QuantidadeCarrinho />
                    </div>
                    <div className={style.conta}>
                        <h3>Quantidade de itens: {quantCar}</h3>
                        <span className={style.valorTotal}>Valor total: {emReal}</span>
                        <textarea className={style.obs} placeholder='Obs:'></textarea>
                        <button className={style.finalizar} disabled={quantCar === 0} onClick={() => dispatch({type: 'showfinalizar'})}>Finalizar compra </button>
                    </div>
                    <section className={state.Fim}>
                        <div className={style.finalizado}>
                        <BsFillEmojiHeartEyesFill className={style.carinha}/>
                        <h3 className={style.agradecimento}>A Master Blaster Foods agradece pela preferência!!</h3>
                        <BsCheckCircle className={style.confirmar} onClick={finalizacaoCompra} />
                        </div>
                    </section>
                </article>
            </main>
        </section>
    )
}

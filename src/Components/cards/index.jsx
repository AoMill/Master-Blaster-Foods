import styles from "./Cards.module.css"
import {useReducer} from "react"
import { useCarrinhoContext } from "../../common/contexts/Card"
import { VscArrowLeft } from "react-icons/vsc";


const initialState = {
  style: `${styles.card}`,
  imgem: `${styles.img}`,
  titulo:`${styles.Titulo}`,
  text:`${styles.texto}`,
  quant: `${styles.qty}`,
  botao: `${styles.botao}`,
  conteudo: `${styles.descr}`,
  foto:`${styles.foto}`,
  divisao: `${styles.di}`,
  Inicial:true 
}
function reducer(state, action) {
  switch (action.type) {
    case 'NewStyle':
      return{
        ...state,
       style:`${styles.cardDois}`,
      imgem: `${styles.imgDois}`, 
      titulo:`${styles.TituloDois}`,
       text: `${styles.textoDois}`,
       quant: `${styles.qtyDois}`,
       botao: `${styles.botaoDois}` ,
       conteudo: `${styles.descrDois}`,
       foto: `${styles.fotoDois}`,
       divisao:`${styles.diDois}`,
       Inicial: false
       }
    case'reset':
     return{
      style: `${styles.card}`,
      imgem: `${styles.img}`,
      titulo:`${styles.Titulo}`,
      text: `${styles.texto}`,
      quant: `${styles.qty}`,
      botao: `${styles.botao}`,
      conteudo: `${styles.desrc}`,
      controla: `${styles.contr}`,
      foto: `${styles.foto}`,
      divisao: `${styles.di}`,
      Inicial: true
     }
    default:
      return state;
  }

}
export default function Cards({ imagem, titulo, id, descricao, valor }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {count, setCount, AddProduto, valorItem,countCar} = useCarrinhoContext()
  const atual = Object.values({valor})
  const emReal= atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  function click({id}) {
    if (({id}) && state.Inicial === true) {
      dispatch({type: 'NewStyle'})
      
    }
  }
  return (

    <section onClick={click} >
    <div className={state.style}  >
      <VscArrowLeft  className={state.foto} onClick={() => dispatch({type: 'reset'})}/>
      <div className={state.divisao}>
        <img src={`/assets/${imagem}.jpg`} alt="" className={state.imgem} />
        <main className={state.conteudo}>
          <h2 className={state.titulo}>{titulo}</h2>
          <p className={state.text}>{descricao}</p>
          <p className={styles.valor}>{emReal}</p>
          <div className={state.quant}>
            <button onClick={() => setCount(count - 1) } className={styles.menos} disabled={count <= 0}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1 )} className={styles.mais}>+</button>
          </div>
          <button className={state.botao} onClick={() =>AddProduto({imagem, titulo, id, descricao, countCar, valor,valorItem})} disabled={count === 0}>Adicionar ao Carrinho</button>
        </main>
      </div>

    </div>
  </section>

  )

}
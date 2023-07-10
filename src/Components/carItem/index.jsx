import { useCarrinhoContext } from "../../common/contexts/Card"
import style from "./CarItem.module.css"

export default function CarItem({imagem, titulo, id, countCar, valor, valorItem}) {
    const {RemoveProtudo, dencrement, increment} = useCarrinhoContext()
    const atual = Object.values({valor})
    const emReal= atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return (
    <>
    <table>
    <tbody>
        <tr>
            <td className={style.fotoitem}>
              <img className={style.imagem} src={`/assets/${imagem}.jpg`} alt="" />
            </td>
            <td className={style.titulo}>
                {titulo}
            </td>
            <td className={style.valor}>
            {emReal} 
            </td>
            <td className={style.quant}>
                <div className={style.qtyy}>
                <button onClick={() => dencrement({id})} disabled={countCar === 1} className={style.BotaoQuant}>-</button>
                <span className={style.quantV}>{countCar}</span>
                <button onClick={() => increment({id})} className={style.BotaoQuant} >+</button>
                </div>
            </td>
            <td>
                <button onClick={() =>RemoveProtudo(id)} className={style.BotaoExcluir}>x</button>
            </td>
        </tr>
    </tbody>
</table> 

    </>
    )
}

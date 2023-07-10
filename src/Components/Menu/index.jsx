import style from './Menu.module.css'
import Cards from '../../Components/cards'
import hamb from "../../Components/itensJSON/hamb.json"
import sorv from "../../Components/itensJSON/sorv.json"
import hot from "../../Components/itensJSON/HotDog.json"
import pizza from "../../Components/itensJSON/pizza.json"
import bebida from "../../Components/itensJSON/bebidas.json"
import petisco from "../../Components/itensJSON/petiscos.json"

import { useReducer } from 'react'

const initialState = {
    hambr: `${style.hamburg} and ${true}`,
    sorve: `${style.sorveteDois} ${false}`,
    HotD: `${style.hotdog}`,
    piz: `${style.pizz}`,
    bebidas:`${style.drink}`,
    snack:`${style.snacks}`,
 
}
function reducer(state, action) {
    switch (action.type) {
        case 'showHamb':
            return {
                ...state,
                hambr: `${style.hamburg}`,
                sorve:`${style.sorveteDois}` ,
                HotD: `${style.hotdog}`,
                piz: `${style.pizz}`,
                bebidas:`${style.drink}`,
                snack:`${style.snacks}`,
                selecionado:`${style.select}`
            }
        case 'showSorv':
            return {
                ...state,
                hambr: `${style.hamburgDois}`,
                sorve: `${style.sorvete}`,
                HotD: `${style.hotdog}`,
                piz: `${style.pizz}`,
                selecionado: `${style.selectDois}`,
                bebidas:`${style.drink}`,
                snack:`${style.snacks}`
            }
        case 'showHotd':
            return {
                ...state,
                HotD: `${style.hotdogDois}`,
                hambr: `${style.hamburgDois}`,
                sorve: `${style.sorveteDois}`,
                piz: `${style.pizz}`,
                bebidas:`${style.drink}`,
                snack:`${style.snacks}`
            }
        case 'showPizza':
            return {
                ...state,
                piz: `${style.pizzDois}`,
                sorve: `${style.sorveteDois}`,
                HotD: `${style.hotdog}`,
                hambr: `${style.hamburgDois}`,
                bebidas:`${style.drink}`,
                snack:`${style.snacks}`
            }
        case 'showBebidas':
            return {
                ...state,
                bebidas:`${style.drinkDois}`,
                piz: `${style.pizz}`,
                sorve: `${style.sorveteDois}`,
                HotD: `${style.hotdog}`,
                hambr: `${style.hamburgDois}`,
                snack:`${style.snacks}`
            }
        case 'showPetiscos':
            return {
                ...state,
                snack:`${style.snacksDois}`,
                piz: `${style.pizz}`,
                sorve: `${style.sorveteDois}`,
                HotD: `${style.hotdog}`,
                hambr: `${style.hamburgDois}`,
                bebidas:`${style.drink}`,
            }
        default:
            return state;
    }

}
export default function Menu() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (

        <main >
            <div className={state.hambr}>
                {hamb.map((cards) => (
                    <Cards
                        {...cards}
                        key={cards.id}
                    />
                ))}
            </div>
            <div className={state.sorve}>
                {sorv.map((cards) => (
                    <Cards
                        {...cards}
                        key={cards.id}
                    />
                ))}
            </div>
            <div className={state.HotD}>
                {hot.map((cards) => (
                    <Cards
                        {...cards}
                        key={cards.id}
                    />
                ))}
            </div>
            <div className={state.piz}>
                {pizza.map((cards) => (
                    <Cards
                        {...cards}
                        key={cards.id}
                    />
                ))}
            </div>
            <div className={state.bebidas}>
                {bebida.map((cards) => (
                    <Cards
                        {...cards}
                        key={cards.id}
                    />
                ))}
            </div>
            <div className={state.snack}>
                {petisco.map((cards) => (
                    <Cards
                        {...cards}
                        key={cards.id}
                    />
                ))}
            </div>

            <section className={style.escolherMenu}>
                <img src={`/assets/andromeda.jpg`} alt=""onClick={() => dispatch({ type: 'showHamb' })} />
                <img src={`/assets/milkyWay.jpg`} alt="" onClick={() => dispatch({ type: 'showSorv' })}/>
                <img src={`/assets/ultimate.jpg`} alt="" onClick={() => dispatch({ type: 'showHotd' })}/>
                <img src={`/assets/saborosa.jpg`} alt="" onClick={() => dispatch({ type: 'showPizza' })}/>
                <img src={`/assets/BoLimao.jpg`} alt="" onClick={() => dispatch({ type: 'showBebidas' })}/>
                <img src={`/assets/planetary.jpg`} alt="" onClick={() => dispatch({ type: 'showPetiscos' })}/>
            </section>
        </main>

    )
}


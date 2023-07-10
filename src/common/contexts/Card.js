import { createContext, useContext, useEffect, useState } from "react";
export const CardContext = createContext();

export function CardContextProvider({ children }) {
  const [itens, setItens] = useState([])
  const [count, setCount] = useState(0)
  const [countCar, setCountCar] = useState(0)
  const [quantCar, setQuantCar] = useState(0)
  const [valorItem, setValorItem] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)

  return (
    <CardContext.Provider value={{
      count, setCount, countCar, setCountCar,
      itens, setItens, quantCar, setQuantCar,
      valorItem, setValorItem,
      valorTotal, setValorTotal
    }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCarrinhoContext = () => {
  const {
    count, setCount, itens, setItens,
    quantCar, setQuantCar, valorItem,
    setValorItem, valorTotal, setValorTotal,
    countCar, setCountCar 
  } = useContext(CardContext)
  
  useEffect(() =>{
    setCountCar(count)
  },[count,setCountCar])
  
  function AddProduto(novoItem) {
    const item = itens.find((produto) => produto.id === novoItem.id)
   
    
    if (!item) {
      itens.push(novoItem)
    }
    else {
      item.countCar = item.countCar + novoItem.countCar
    }
    
    const mult = itens.map((conta) => {
      if (conta.id === novoItem.id) {
        return conta.valorItem = (conta.valor * conta.countCar)
      }
      return null
    })
    
    const valorPorItem = itens.map((Total) => Total.valorItem)
    const total = valorPorItem.reduce((total, numero) => total + numero,)
 
    setValorTotal(total)
    setValorItem(mult)
    setQuantCar(itens.length)
    setItens(itens)
    setCount(0)
    
  }


  function RemoveProtudo(itemDentroDoCar) {
    const item = itens.find((produto) => produto.id === itemDentroDoCar.id)
    if (item) {
      setItens(itens)
    } else {
      const arrayFiltrado = itens.filter((product) => product.id !== itemDentroDoCar)
      setItens(arrayFiltrado)
      setQuantCar(itens.length - 1)
      const valorDel = arrayFiltrado.map((Total) => Total.valorItem)
      const totalAtualizado = valorDel.reduce((total, numero) => total + numero, 0)
      setValorTotal(totalAtualizado)
    }

  }
  function dencrement(valor) {
    const sub = itens.map((conta) => {
      if(conta.id === valor.id){
       conta.countCar = (conta.countCar - 1)
       conta.valorItem = (conta.valorItem - conta.valor) 
      }
      return null
    })
    const subTotal = itens.map((subT) => subT.valorItem)
    const totalAtualizadoSub = subTotal.reduce((total, numero) => total + numero, 0)   
    setValorItem(sub)
    setCountCar(sub)
    setValorTotal(totalAtualizadoSub)
  }

  function increment(valor){
    const soma = itens.map((conta) => {
      if(conta.id === valor.id){
       conta.countCar = (conta.countCar + 1)
       conta.valorItem = (conta.valorItem + conta.valor) 
      }
      return null
    })
    const subTotal = itens.map((subT) => subT.valorItem)
    const totalAtualizadoSoma = subTotal.reduce((total, numero) => total + numero, 0)   
    setValorItem(soma)
    setCountCar(soma)
    setValorTotal(totalAtualizadoSoma)

  }
  function reset(){
    setItens([])
    setValorTotal(0)
    setQuantCar(0)
  }



  return {
    count,
    countCar,
    setCount,
    itens,
    setItens,
    AddProduto,
    RemoveProtudo,
    quantCar,
    valorItem,
    valorTotal,
    dencrement,
    increment,
    reset
  }

}


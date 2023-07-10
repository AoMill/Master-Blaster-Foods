import { useCarrinhoContext } from "../../common/contexts/Card"
import CarItem from "../carItem"


export default function QuantidadeCarrinho() {
  const {itens} = useCarrinhoContext()
  const i = itens.map((produtos) =>(
    <CarItem
    {...produtos}
    key={produtos.id}
  />
  )) 
  return (
    <div>
      {i}
    </div>
  )
}

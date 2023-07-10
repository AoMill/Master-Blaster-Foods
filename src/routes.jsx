
import { BrowserRouter,Route, Routes} from "react-router-dom";
import PaginaInicial from './paginainicial';
import PaginaDoMenu from './paginaDoMenu';
import Carrinho from "./paginaDoCarrinho";

function AppRoutes() {
  return (
    <BrowserRouter >
         <Routes>
           <Route path="/" element={<PaginaInicial />}></Route>
           <Route path="/menu" element={<PaginaDoMenu />}></Route>
           <Route path="/carrinho" element={<Carrinho />}></Route>
         </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
import style from "./PaginaDoMenu.module.css"
import Navegador from "../Components/nav"
import Menu from "../Components/Menu"

export default function PaginaDoMenu() {
    return (
       
        <section className={style.corfundo}>
            <main className={style.container}>
                <Navegador />
                <div className={style.controla}>
                  <Menu />
                </div>
            </main>
        </section>
     
    )
}

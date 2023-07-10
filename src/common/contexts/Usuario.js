import { createContext, useState } from "react";

export const UsuarioContext = createContext()

export  function UsuarioProvider({ children }) {
    const [nome, setNome] = useState('')

    function Reset(){
        setNome('')
    }
    
    return(
        <UsuarioContext.Provider value={{nome,setNome, Reset}}>
            { children }
        </UsuarioContext.Provider>
    ) 
}
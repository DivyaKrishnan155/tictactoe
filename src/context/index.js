import { createContext,useState } from "react";

export const DivyaContext = createContext()

export default function ThemeContext(children){
    const[darkMode,setDarkMode]=useState(false)

    return(
    <DivyaContext.Provider value={[darkMode,setDarkMode]}>
        {children}
    </DivyaContext.Provider>
    )
}
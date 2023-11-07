import React, { createContext, useContext, useState } from 'react'
import ProductData from "../components/Prodect-Data";

const GlobalContext = createContext({})

export function useGlobalContext() {
    return useContext(GlobalContext)


}
export function GlobalContextProvider({ children }) {
    const [darkmode, setDarkmod] = useState(false)

    const [products, setProducts] = useState(ProductData)


    return <GlobalContext.Provider value={{
        darkmode, setDarkmod, products, setProducts
    }}>
        {children}
    </GlobalContext.Provider>
}

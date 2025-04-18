import { createContext } from "react"

export const DataContext = createContext({})

const user = {
    username: 'alion',
    firstName: 'Ali',
    lastName: 'GreenHeart'
}


const DataContextProvider = ({ children }) => {
    return (
        <DataContext.Provider value={user}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;

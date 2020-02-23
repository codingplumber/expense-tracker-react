import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// Provider to pass the state to other components
// children are the components we are wrapping
export const GlobalProvider = ({ children }) => {
    // dispatch
    // takes in our reducer and our initial state
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // actions - make calls to our reducer
    // pass this to the provider to provide it to the components that need it
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    };

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    };

    // return our provider on our global context wrapping our children (components we want to connect to this state)
    // provides state and actions to the components it wraps
    // we add a value prop to it to pass in our state
    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

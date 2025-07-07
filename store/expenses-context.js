import { useContext, useReducer } from "react";

const ExpensesContext = useContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
})

function expenseReducer(state, action) {
    switch(action.type) {
        case 'ADD':
        case 'UPDATE':
        case 'DELETE':
        default: 
            return state
    }
}
 
export default function ExpensesContextProvider({children}) {
    const [expenseState, dispatch] = useReducer(expenseReducer)

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData})
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id})
    }

    function updateExpense(id) {
        dispatch({type: 'UPDATE', payload: expenseData})
    }

    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}
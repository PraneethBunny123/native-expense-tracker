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

    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}
import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    setExpenses: (expenses) => {},
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
})

function expenseReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{...action.payload, id: id}, ...state]
        case 'SET': 
            const inverted = action.payload.reverse()
            return inverted
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex(expense => expense.id === action.payload.id)
            const updatableExpense = state[updatableExpenseIndex]
            const updatedExpenseitem = {...updatableExpense, ...action.payload.data}
            const updatedExpenses = [...state]
            updatedExpenses[updatableExpenseIndex] = updatedExpenseitem
            return updatedExpenses
        case 'DELETE':
            return state.filter(expense => expense.id !== action.payload)
        default: 
            return state
    }
}
 
export default function ExpensesContextProvider({children}) {
    const [expenseState, dispatch] = useReducer(expenseReducer, [])

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData})
    }

    function setExpenses(expenses) {
        dispatch({type: 'SET', payload: expenses})
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expenseState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}
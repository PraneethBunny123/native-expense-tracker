import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 79.99,
        date: new Date('2025-06-05')
    },
    {
        id: 'e2',
        description: 'Chocolates',
        amount: 15.99,
        date: new Date('2025-05-05')
    },
    {
        id: 'e3',
        description: 'Perfume',
        amount: 39.99,
        date: new Date('2025-07-03')
    },
    {
        id: 'e4',
        description: 'Ear buds',
        amount: 199.99,
        date: new Date('2025-07-05')
    },
    {
        id: 'e5',
        description: 'Watch',
        amount: 75.99,
        date: new Date('2025-06-30')
    },
    {
        id: 'e6',
        description: 'Slides',
        amount: 49.99,
        date: new Date('2025-06-29')
    },
    {
        id: 'e7',
        description: 'Car',
        amount: 19759.99,
        date: new Date('2024-07-05')
    },
    {
        id: 'e8',
        description: 'Deodrant',
        amount: 11.99,
        date: new Date('2023-07-05')
    },
    {
        id: 'e9',
        description: 'Knife',
        amount: 14.99,
        date: new Date('2025-07-02')
    }
]

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
})

function expenseReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString()
            return [{...action.payload, id: id}, ...state]
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
    const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES)

    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData})
    }

    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id})
    }

    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}})
    }

    const value = {
        expenses: expenseState,
        addExpense: addExpense,
        updateExpense: updateExpense,
        deleteExpense: deleteExpense
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}
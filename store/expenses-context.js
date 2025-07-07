import { useContext } from "react";

const ExpensesContext = useContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}
})

export default function ExpensesContextProvider({children}) {
    

    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}
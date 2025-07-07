import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

export default function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext)

    const recentExpenses = expensesCtx.expenses.filter(expense => {
        const today = new Date()
    })

    return (
        <ExpensesOutput expenses={expensesCtx.expenses} period='last 7 days' />
    )
}
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import Loading from "../components/UI/Loading";

export default function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true)
    const expensesCtx = useContext(ExpensesContext)

    useEffect(() => {
        async function fetchExpenses() {
            setIsFetching(true)
            const expenses = await getExpenses()
            setIsFetching(false)
            expensesCtx.setExpenses(expenses)
        }

        fetchExpenses()
    }, [])

    const recentExpenses = expensesCtx.expenses.filter(expense => {
        const today = new Date()
        const date7DaysAgo = getDateMinusDays(today, 7)

        return (expense.date >= date7DaysAgo) && (expense.date <= today)
    })

    if(isFetching) {
        return <Loading />
    }

    return (
        <ExpensesOutput 
            expenses={recentExpenses} 
            period='last 7 days' 
            fallbackText="No registered expenses during the last 7 days"    
        />
    )
}
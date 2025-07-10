import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

export default function RecentExpenses() {
    const [isFetching, setIsFetching] = useState(true)
    const [error, setError] = useState()
    const expensesCtx = useContext(ExpensesContext)

    useEffect(() => {
        async function fetchExpenses() {
            setIsFetching(true)
            try {
                const expenses = await getExpenses()
                expensesCtx.setExpenses(expenses)
            } catch(error) {
                setError('Could not fetch expenses!')
            }
            
            setIsFetching(false)
            
        }
        fetchExpenses()
    }, [])

    if(error && !isFetching) {
        <Error message={error} />
    }

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
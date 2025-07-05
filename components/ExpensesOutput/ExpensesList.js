import { FlatList, Text } from "react-native"
import ExpenseItem from "./ExpenseItem"

export default function ExpensesList({expenses}) {

    function renderExpense(itemData) {
        const item = itemData.item

        const expenseProps = {
            description: item.description,
            amount: item.amount,
            date: item.date
        }

        return (
            <ExpenseItem {...expenseProps} />
        )
    }

    return (
        <FlatList 
            data={expenses}
            keyExtractor={item => item.id}
            renderItem={renderExpense}
        />
    )
}
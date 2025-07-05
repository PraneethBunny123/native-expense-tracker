import { FlatList, Text } from "react-native"
import ExpenseItem from "./ExpenseItem"

export default function ExpensesList({expenses}) {

    function renderExpense(itemData) {
        const item = itemData.item

        return (
            <ExpenseItem {...item} />
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
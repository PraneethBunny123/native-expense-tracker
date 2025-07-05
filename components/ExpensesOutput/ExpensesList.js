import { FlatList, Text } from "react-native"

export default function ExpensesList({expenses}) {

    function renderExpense(itemData) {
        return (
            <Text>{itemData.item.description}</Text>
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
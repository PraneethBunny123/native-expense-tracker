import { Text } from "react-native";

export default function ManageExpenses({route, navigation}) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    navigation.setOptions({
        title: isEditing ? 'Edit Expense' : 'Add Expense'
    })

    return (
        <Text>ManageExpenses</Text>
    )
}
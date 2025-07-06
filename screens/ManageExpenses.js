import { useLayoutEffect } from "react";
import { Text } from "react-native";

export default function ManageExpenses({route, navigation}) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])
    

    return (
        <Text>ManageExpenses</Text>
    )
}
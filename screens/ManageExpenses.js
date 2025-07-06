import { Text } from "react-native";

export default function ManageExpenses({route}) {
    const expenseId = route.params.expenseId

    return (
        <Text>ManageExpenses</Text>
    )
}
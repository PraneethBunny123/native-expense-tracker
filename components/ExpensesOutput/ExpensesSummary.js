import { Text, View } from "react-native";

export default function ExpensesSummary({expenses, period}) {
    const expenseSum = expenses.reduce((sum, expense) => {
        return sum + expense
    }, 0)

    return (
        <View>
            <Text>{period}</Text>
            <Text>${expenseSum.toFixed(2)}</Text>
        </View>
    )
}
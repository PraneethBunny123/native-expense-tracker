import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 79.99,
        date: new Date('2025-07-05')
    },
    {
        id: 'e2',
        description: 'Chocolates',
        amount: 15.99,
        date: new Date('2025-07-05')
    },
    {
        id: 'e3',
        description: 'Perfume',
        amount: 39.99,
        date: new Date('2025-07-03')
    }
]

export default function ExpensesOutput({expenses, period}) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} period={period} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700
    }
})
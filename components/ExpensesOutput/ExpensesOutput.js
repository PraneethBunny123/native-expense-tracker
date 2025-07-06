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
    },
    {
        id: 'e4',
        description: 'Ear buds',
        amount: 199.99,
        date: new Date('2025-07-05')
    },
    {
        id: 'e5',
        description: 'Watch',
        amount: 75.99,
        date: new Date('2025-07-05')
    },
    {
        id: 'e6',
        description: 'Slides',
        amount: 49.99,
        date: new Date('2025-07-03')
    },
    {
        id: 'e7',
        description: 'Car',
        amount: 19759.99,
        date: new Date('2025-07-05')
    },
    {
        id: 'e8',
        description: 'Deodrant',
        amount: 11.99,
        date: new Date('2025-07-05')
    },
    {
        id: 'e9',
        description: 'Knife',
        amount: 14.99,
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
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
})
import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

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
        <View>
            <ExpensesSummary expenses={DUMMY_EXPENSES} period={period} />
            <ExpensesList />
        </View>
    )
}
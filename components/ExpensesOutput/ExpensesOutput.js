import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

export default function ExpensesOutput({expenses, period}) {
    return (
        <View>
            <ExpensesSummary expenses={expenses} period={period} />
            <ExpensesList />
        </View>
    )
}
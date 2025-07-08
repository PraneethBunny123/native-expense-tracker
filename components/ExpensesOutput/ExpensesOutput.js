import { Text, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

export default function ExpensesOutput({expenses, period, fallbackText}) {
    let content = <Text style={styles.fallbackText}>{fallbackText}</Text>

    if(expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} period={period} />
            {content}
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
    },
    fallbackText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})
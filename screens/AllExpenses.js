import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

export default function AllExpenses() {
    const {expenses} = useContext(ExpensesContext)

    return (
        <ExpensesOutput expenses={expenses} period="Total" />
    )
}
import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from '../constants/styles'
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

export default function ManageExpenses({route, navigation}) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    const expensesCtx = useContext(ExpensesContext)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])
    
    function handleDeleteExpense() {
        expensesCtx.deleteExpense(expenseId)
        navigation.goBack()
    }

    function handleCancelButton() {
        navigation.goBack()
    }

    function handleConfirmButton(expenseData) {
        if(isEditing) {
            expensesCtx.updateExpense(expenseId, expenseData)
        } else {
            expensesCtx.addExpense(expenseData)
        }
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <ExpenseForm 
                handleCancelButton={handleCancelButton} 
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={handleConfirmButton}
            />
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton 
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={24}
                        onPress={handleDeleteExpense}
                    />
                </View>
            )}  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})
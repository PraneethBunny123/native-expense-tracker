import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from '../constants/styles'
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, postExpenses, updatedExpense } from "../util/http";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

export default function ManageExpenses({route, navigation}) {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()

    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    const expensesCtx = useContext(ExpensesContext)

    const selectedExpense = expensesCtx.expenses.find(expense => expense.id === expenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])
    
    async function handleDeleteExpense() {
        setIsFetching(true)
        try {
            expensesCtx.deleteExpense(expenseId)
            await deleteExpense(expenseId)
            navigation.goBack()
        } catch(error) {
            setError('Could not delete expense - please try again later')
            setIsFetching(false)
        }
    }

    function handleCancelButton() {
        navigation.goBack()
    }

    async function handleConfirmButton(expenseData) {
        setIsFetching(true)
        if(isEditing) {
            expensesCtx.updateExpense(expenseId, expenseData)
            await updatedExpense(expenseId, expenseData)
        } else {
            const id = await postExpenses(expenseData)
            expensesCtx.addExpense({...expenseData, id: id})
        }
        navigation.goBack()
    }

    function handleErrorOkay() {
        setError(null)
    }

    if(error && !isFetching) {
        return <Error message={error} onPress={handleErrorOkay} />
    }

    if(isFetching) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <ExpenseForm 
                handleCancelButton={handleCancelButton} 
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={handleConfirmButton}
                defaultValues={selectedExpense}
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
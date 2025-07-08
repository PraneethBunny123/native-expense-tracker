import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from '../constants/styles'
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";

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

    function handleConfirmButton() {
        if(isEditing) {
            expensesCtx.updateExpense(expenseId, {
                description: 'Testing update!',
                amount: 99.99,
                date: new Date('2000-11-18')
            })
        } else {
            expensesCtx.addExpense({
                description: 'Testing Add!',
                amount: 9.99,
                date: new Date('2002-10-06')
            })
        }
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={handleCancelButton}>Cancel</Button>
                <Button style={styles.button} onPress={handleConfirmButton}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import {GlobalStyles} from '../constants/styles'
import Button from "../components/UI/Button";

export default function ManageExpenses({route, navigation}) {
    const expenseId = route.params?.expenseId
    const isEditing = !!expenseId

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        })
    }, [navigation, isEditing])
    
    function handleDeleteExpense() {

    }

    function handleCancelButton() {

    }

    function handleConfirmButton() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button mode='flat' onPress={handleCancelButton}>Cancel</Button>
                <Button onPress={handleConfirmButton}>{isEditing ? 'Update' : 'Add'}</Button>
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
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})
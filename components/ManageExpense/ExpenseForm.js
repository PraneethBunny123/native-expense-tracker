import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";

export default function ExpenseForm({handleCancelButton, submitButtonLabel, onSubmit, defaultValues}) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
        description: defaultValues ? defaultValues.description : ''
    })

    function handleInputChange(inputLabel, enteredValue) {
        setInputValues(prevState => (
            {...prevState, [inputLabel]: enteredValue}
        ))
    }

    function handleFormSubmit() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        }

        onSubmit(expenseData)
    }

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow} >
                <Input 
                    style={styles.rowInput}
                    label='Amount'
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: handleInputChange.bind(this, 'amount'),
                        value: inputValues.amount
                    }}
                />
                <Input 
                    style={styles.rowInput}
                    label='Date'
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: (e) => handleInputChange('date', e),
                        value: inputValues.date
                    }}
                />
            </View>
            <Input 
                label='Description'
                textInputConfig={{
                    multiline: true,
                    onChangeText: (e) => handleInputChange('description', e),
                    value: inputValues.description
                }}
            />
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={handleCancelButton}>Cancel</Button>
                <Button style={styles.button} onPress={handleFormSubmit}>{submitButtonLabel}</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
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
})
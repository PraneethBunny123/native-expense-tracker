import { Alert, StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import getFormattedDate from "../../util/date";
import { GlobalStyles } from "../../constants/styles";

export default function ExpenseForm({handleCancelButton, submitButtonLabel, onSubmit, defaultValues}) {
    const [inputValues, setInputValues] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true
        }
    })

    function handleInputChange(inputLabel, enteredValue) {
        setInputValues(prevState => (
            {
                ...prevState, 
                [inputLabel]: {value: enteredValue, isValid: true}
            }
        ))
    }

    function handleFormSubmit() {
        const expenseData = {
            amount: +inputValues.amount.value,
            date: new Date(inputValues.date.value),
            description: inputValues.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date'
        const descriptionIsValid = expenseData.description.trim().length > 0

        if(!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('Invalid input, Please check your input values!')
            setInputValues(prevState => (
                {
                    amount: {value: prevState.amount.value, isValid: amountIsValid},
                    date: {value: prevState.date.value, isValid: dateIsValid},
                    description: {value: prevState.description.value, isValid: descriptionIsValid}
                }
            ))
            return;
        }

        onSubmit(expenseData)
    }

    const formIsValid = !inputValues.amount.isValid || !inputValues.date.isValid || !inputValues.description.isValid


    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow} >
                <Input 
                    style={styles.rowInput}
                    label='Amount'
                    invalid={!inputValues.amount.isValid}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: handleInputChange.bind(this, 'amount'),
                        value: inputValues.amount.value
                    }}
                />
                <Input 
                    style={styles.rowInput}
                    label='Date'
                    invalid={!inputValues.date.isValid}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: (e) => handleInputChange('date', e),
                        value: inputValues.date.value
                    }}
                />
            </View>
            <Input 
                label='Description'
                invalid={!inputValues.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: (e) => handleInputChange('description', e),
                    value: inputValues.description.value
                }}
            />
            {formIsValid && <Text style={styles.errorText}>Invalid input, Please check your input values!</Text>}
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
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8
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
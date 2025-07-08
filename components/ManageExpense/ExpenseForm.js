import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

export default function ExpenseForm() {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    })

    function handleInputChange(inputLabel, enteredValue) {
        setInputValues(prevState => (
            {...prevState, [inputLabel]: enteredValue}
        ))
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
                        onchangeText: () => handleInputChange('amount'),
                        value: inputValues.amount
                    }}
                />
                <Input 
                    style={styles.rowInput}
                    label='Date'
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onchange: () => {},
                        value: inputValues.date
                    }}
                />
            </View>
            <Input 
                label='Description'
                textInputConfig={{
                    multiline: true,
                    value: inputValues.description
                }}
            />
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
    }
})
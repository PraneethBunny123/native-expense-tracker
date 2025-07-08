import { StyleSheet, View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {

    function handleAmountChange() {

    }

    return (
        <View>
            <View style={styles.inputRow} >
                <Input 
                    style={styles.rowInput}
                    label='Amount'
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onchangeText: handleAmountChange()
                    }}
                />
                <Input 
                    style={styles.rowInput}
                    label='Date'
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onchange: () => {}
                    }}
                />
            </View>
            <Input 
                label='Description'
                textInputConfig={{
                    multiline: true
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    }
})
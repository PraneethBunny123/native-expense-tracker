import { View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {

    function handleAmountChange() {

    }

    return (
        <View>
            <Input 
                label='Amount'
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onchangeText: handleAmountChange()
                }}
            />
            <Input 
                label='Date'
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onchange: () => {}
                }}
            />
            <Input 
                label='Description'
                textInputConfig={{
                    multiline: true
                }}
            />
        </View>
    )
}
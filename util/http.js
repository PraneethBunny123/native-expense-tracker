import axios from "axios";

export function storeFunction(expenseData) {
    axios.post(
        'https://native-expenses-30be3-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    )
}
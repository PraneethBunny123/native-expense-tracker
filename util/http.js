import axios from "axios";

const BACKEND_URL = 'https://native-expenses-30be3-default-rtdb.firebaseio.com/'

export function postFunction(expenseData) {
    axios.post(
        BACKEND_URL + 'expenses.json',
        expenseData
    )
}

export function getExpenses() {
    axios.get(
        BACKEND_URL + 'expenses.json'
    )
}
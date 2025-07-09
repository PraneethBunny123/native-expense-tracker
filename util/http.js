import axios from "axios";

const BACKEND_URL = 'https://native-expenses-30be3-default-rtdb.firebaseio.com/'

export async function postExpenses(expenseData) {
    const response = await axios.post(BACKEND_URL + 'expenses.json', expenseData)
    const id = response.data.name
    return id;
}

export async function getExpenses() {
    const response = await axios.get(BACKEND_URL + 'expenses.json')

    let expenses = []

    for(const key in response.data) {
        const expenseItem = response.data[key]
        const expenseObj = {
            id: key,
            amount: expenseItem.amount,
            date: new Date(expenseItem.date),
            description: expenseItem.description
        }
        expenses.push(expenseObj)
    }

    return expenses
}

export function updatedExpense(id, expenseData) {
    return axios.put(BACKEND_URL + `expenses/${id}.json`, expenseData)
}

export function deleteExpense(id) {
    return axios.delete(BACKEND_URL + `expenses/${id}.json`)
}
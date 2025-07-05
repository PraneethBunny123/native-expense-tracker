import { StyleSheet } from "react-native";
import { Pressable, Text, View } from "react-native";

export default function ExpenseItem({description, amount, date}) {
    return (
        <Pressable>
            <View>
                <View>
                    <Text>{description}</Text>
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text>{amount}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    
})
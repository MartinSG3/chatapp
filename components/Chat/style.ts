import { StyleSheet } from "react-native";
import Colors  from "../../constants/Colors";

const style = StyleSheet.create({
     container: {
        padding: 10,
     },
     box: {
        backgroundColor: '#e5e5e5',
        marginRight: 50,
        borderRadius: 5,
        padding: 10,
     },
     name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5
     },
     date: {
        alignSelf: "flex-end",
        color: "grey"
     }
})

export default style;
import { StyleSheet } from "react-native";
import Colors  from "../../constants/Colors";

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        alignItems: "flex-end"
    },
    main: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: "flex-end"
    },
    input: {
        flex: 1,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        marginHorizontal: 5
    }
});

export default style;
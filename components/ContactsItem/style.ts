import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
    },
    imageContainer: {
        flexDirection: "row",
    },
    textContainer: {
        justifyContent: "space-around"
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
    },
    status: {
        fontSize: 16,
        color: 'grey',
        width: '100%',
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 15,
        borderRadius: 50,
    }
});

export default style;
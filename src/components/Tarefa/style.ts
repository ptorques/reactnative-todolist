import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    nameActive:{
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
    },
    nameDone:{
        flex: 1,
        fontSize: 16,
        color: '#7d7d7d',
        marginLeft: 16,
        textDecorationLine: "line-through"
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor:'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0
    },
    checkClick: {
        width: "78%",
        height: "100%",
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 20
    },
})
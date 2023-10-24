import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    CenteredView: {
        justifyContent: 'center',
        alignItems: "center",
        flex: 1,
        backgroundColor: "#113761",
        width: "100%"
    },
    NewsImg: {
        height: 200,
        width: 300,
        borderRadius: 20
    },
    NewsTxt: {
        marginHorizontal: 20,
        textAlign: "center",
        marginVertical: 40,
        fontSize: 16,
        fontWeight: "600"
    },
    CenterData: {
        justifyContent: 'center',
        alignItems: "center",
        width: "100%"
    },
    Lable: {
        fontWeight: "600",
        fontSize: 16,
        color: "white",
        marginVertical: 20
    },
    TextInput: {
        fontWeight: "600",
        fontSize: 14,
        color: "#fff",
        width: "100%"
    },
    Border:{
        borderWidth: 1, 
        borderColor: "#ffffff",
        borderRadius: 10,
        width: "100%"
    },
    InputContainer: {
        width: "80%"
    },
    WidthContainer: {
        width: "100%",
    },
    Btn: {
        backgroundColor: "#f5da42",
        width: "80%",
        marginVertical: 20,
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#f5da42"
    },
    BtnTxt: {
        color: "black",
        fontWeight: "600",
        fontSize: 16
    },
})
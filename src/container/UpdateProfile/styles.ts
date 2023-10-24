import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ComponentContainer: {
        flex:1,
    },
    Border:{
        borderWidth: 1, 
        borderColor: "black",
        borderRadius: 10
    },
    Container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20
    },
    Lable: {
        fontWeight: "600",
        fontSize: 16,
        color: "black",
        marginVertical: 10
    },
    TextInput: {
        fontWeight: "600",
        fontSize: 14,
        color: "black",
    },
    Btn: {
        backgroundColor: "#f5da42",
        width: "100%",
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
    InputContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        
    },
    ImageContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    Decagonal: {
        position: "absolute"
    },
    Img: {
        width: 140,
        height: 140
    },
    PlusIcon:{
        position: "absolute",
    },
    PickedImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 1
    }
   
})
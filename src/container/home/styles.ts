import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:"#ffffff"
    },
    ImgTxtContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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
    Head: {
        fontSize: 16,
        color: "#9c9c9c",
        textAlign: "center",
        fontWeight: "700"
    },
    TxtContainer: {
        marginVertical: 40,
    },
    ParaTxt: {
        fontSize: 14,
        color: "#9c9c9c",
        textAlign: "center",
    },
    WebsitePara: {
        fontSize: 14,
        color: "#9c9c9c",
        textAlign: "center",
    },
    ParaTxtContainer: {
        marginVertical: 20
    },
    FooterContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20
    },
    DecagonalWithLine: {
        justifyContent: 'center',
        alignItems: "center"
    },
    CenteredView: {
        justifyContent: 'center',
        alignItems: "center",
        flex: 1,
        backgroundColor: "#113761"
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
    PickedImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 1
    },
    ImageModalView: {
        justifyContent: 'center',
        alignItems: "center",
        flex: 1,
        backgroundColor: "#113761"
    },
    ImageModalHeight: {
        width:300,
        height: 300,
        borderRadius: 500,
        borderWidth: 1
    },
    progressBar: {
        height: 20,
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
      }
})
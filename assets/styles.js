import { StyleSheet } from "react-native";

const inputViewSize = 350;
const inputLabelSize = inputViewSize / 2;
const font = "Oswald_300Light";

export default StyleSheet.create({

    backGround: {
        flex: 1,
        backgroundColor: '#ccccff',
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    // fontFam:{
    //   fontFamily: ''
    // }


    //GridComponent
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    },
    gridContainer: {
        flex: 1,
        borderRadius: 25,
        shadowColor: "grey",
        shadowOpacity: 0.7,
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 10,
        elevation: 3, // for android - to see the shadow

    },
    titles: {
        fontSize: 25,
        // color: "#48C9B0",
        color: '#fff2cc',
        textAlign: "center",
        textShadowColor:"#330080",
        textShadowRadius: 3,
        // fontFamily: "oswald,reggae-One",
        // fontFamily: font,
        // fontWeight: "bold",
    },


    //BG img
    BGImg: {
        height: 150,
    },



    input: {
        height: 30,
        color: "black",
        width: inputLabelSize,
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 8,
        paddingLeft: 5,
        paddingRight: 5,
        //  marginLeft: inputViewSize * 0.25,
    },
    inputView: {
        marginTop: 5,
        width: inputViewSize,
        justifyContent: "center",
        padding: 3,
    },
    textInput: {
        // fontFamily: "oswald,reggae-One",
        //fontFamily: font,
        color: '#fff2cc',
        fontSize: 18,
        textAlign: "center",
        marginRight: "30%",
        textShadowColor:"#330080",
        textShadowRadius: 3,
    },
    button: {
        marginTop: 20,
        width: 150,
    },
    couponButton: {
        margin: 20,
        borderRadius: 4,
        //width: ,
        backgroundColor: "yellow",
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    inputError: {
        borderColor: "#ff0000",
    },
    errorMsg: {
        color: "#ff0000",
        // marginLeft: inputViewSize * 0.25,
        // marginRight: inputViewSize * 0.25,
        textAlign: "center",
    },
    checkButtonText: {
        fontSize: 20,
        color: '#fff2cc',
        //textAlign: "center",
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        //    fontFamily: font,
        elevation: 3, // for android - to see the shadow
        alignItems: "center",
        //   marginTop: 4,
        alignItems: "center",
        justifyContent: "center",

    },
    checkButton: {
        backgroundColor: "#4747d1",
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        shadowColor: "grey",
        shadowOpacity: 0.7,
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 7,
        elevation: 3, // for android - to see the shadow
        alignItems: "center",
        width: 80,
        height: 30,
        marginTop: 10
    },

    ///////////////////////////////

    scrollViewWrapper: {
        flex: 1,
        width: "100%",
        height: 800,
        alignItems: 'center',
    },

    image: {
        width: "100%",
        height: "100%",
    },
    details: {
        flex: 1,
        padding: 15,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        textAlign: "center",
        textShadowColor: "black",
    },
    listItem: {
        marginVertical: 1,
        marginHorizontal: 50,
        borderColor: "#5c00e6",
        borderWidth: 2.5,
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    listSizes: {
        flexDirection: "row",
        marginVertical: 1,
        marginHorizontal: 50,
        borderRadius: 10,
        borderColor: "#6600ff",
        borderWidth: 1.25,
        padding: 10,
        margin: 5,
    },
    button: {
        height: 45,
        width: 110,
        borderColor: "#b2b2b2",
        borderWidth: 1,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7e9ac8",
        marginBottom: 0,
        marginVertical: 10,
        marginHorizontal: 50,
    },
    txt: {

    },
    icon: {
        marginTop: "15%",
        fontSize: 120,
        color: "green",
    }

});

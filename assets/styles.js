import { StyleSheet } from "react-native";

const inputViewSize = 350;
const inputLabelSize = inputViewSize / 2;
const font = "Kanit_400Regular";

export default StyleSheet.create({

    backGround: {
        flex: 1,
        backgroundColor: '#01949A',
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
        marginBottom: 20
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
        color: '#E5DDC8',
        textAlign: "center",
        textShadowColor: "#330080",
        textShadowRadius: 3,
        // fontFamily: "oswald,reggae-One",
        fontFamily: font,
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
        fontFamily: font,
        color: '#E5DDC8',
        fontSize: 18,
        textAlign: "center",
        marginRight: "30%",
        textShadowColor: "#330080",
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
        fontSize: 17,
        color: '#E5DDC8',
        //textAlign: "center",
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
        fontFamily: font,
        elevation: 3, // for android - to see the shadow
        alignItems: "center",
        //   marginTop: 4,
        alignItems: "center",
        justifyContent: "center",


    },
    checkButton: {
        backgroundColor: "#DB1F48",
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
        marginTop: 10,
        justifyContent: "center",
    },
    payButton: {
        backgroundColor: "#004369",
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 20,
        shadowColor: "grey",
        shadowOpacity: 0.7,
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 7,
        elevation: 3, // for android - to see the shadow
        alignItems: "center",
        width: 140,
        height: 35,
        marginTop: 10,
        justifyContent: "center",
    },

    ///////////////////////////////

    scrollViewWrapper: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
    },

    image: {
        width: "100%",
        height: 400,
    },
    details: {
        flex: 1,
        padding: 15,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: '#E5DDC8',
        fontWeight: "bold",
        textAlign: 'center',
        textShadowRadius: 2,
        textShadowColor: "#330080",
        fontFamily: font,
    },
    listItem: {
        marginVertical: 1,
        marginHorizontal: 50,
        borderColor: "#004369",
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
        borderColor: "#175873",
        borderWidth: 1.25,
        padding: 10,
        margin: 5,
    },
    button: {
        height: 45,
        width: 110,
        borderColor: "#DB1F48",
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
        fontFamily: font,
        color: '#E5DDC8',
    },
    icon: {
        marginTop: "15%",
        fontSize: 120,
        color: "#1EEB30",
    },
    item: {
        height: 200,
        // width: "100%",
        backgroundColor: "#ccc",
        borderRadius: 10,
        overflow: "hidden",
    },
    productRow: {
        flexDirection: "row",
        borderRadius: 50,
    },
    productHeader: {
        height: "80%",
    },
    productDetail: {
        marginTop: 5,
        justifyContent: "space-between",
        alignItems: "center",
        height: "20%",
    },
    // ADD: must set wdth and height -> it is from the web.
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "center",


    },
    titleContainer: {
        height: 150,
        width: 150
    },
    mainContainer: {
        flex: 1,
        borderRadius: 15,
        shadowColor: "#24248f",
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3, // for android - to see the shadow
        justifyContent: "center",
        alignItems: "center",
    },
    gridItemProduct: {
        marginTop: 55,
        flex: 1,
        margin: 10,
        height: 200,
        marginBottom: 55,
    },
    button2: {
        height: 30,
        width: 75,
        borderColor: "#b2b2b2",
        borderWidth: 1,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#7e9ac8",
        margin: 10,
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000000'
    },
    warning_modal: {
        width: 100,
        height: 30,
        backgroundColor: '#004369aa',
        borderWidth: 1,
        borderColor: '#E5DDC8',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Kanit_500Medium',
        color: '#E5DDC8',
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    gridItemCat: {
        marginTop: 70,
        flex: 1,
        margin: 15,
        height: 180,
        marginBottom: -40,

    },
    categoriesContainer: {
        flex: 1,
        borderRadius: 15,
        shadowColor: "black",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3, // for android - to see the shadow
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 5,
    },

});

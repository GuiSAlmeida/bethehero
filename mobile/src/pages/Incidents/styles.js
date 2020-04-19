import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    header__text: {
        fontSize: 15,
        color: "#737380",
    },

    header__text_bold: {
        fontWeight: 'bold'
    },

    header__title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: "#13131a",
        fontWeight: 'bold'
    },

    incidents: {
        marginTop: 32
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16
    },

    incident__property: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold"
    },

    incident__value: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    }, 

    incident__button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident__text: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }

});
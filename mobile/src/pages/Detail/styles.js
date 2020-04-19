import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
        marginTop: 48 
    },

    incident__property: {
        fontSize: 14,
        color: "#41414d",
        fontWeight: "bold",
        marginTop: 24,
    },

    incident__value: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    incident__contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
    },

    contactBox__title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#13131a",
        lineHeight: 30
    },

    contactBox__description: {
        fontSize: 15,
        color: "#737380",
        marginTop: 16
    },

    contactBox__actions: {
        marginTop: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }, 

    contactBox__action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    action__text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});
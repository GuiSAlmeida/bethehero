import React, { Fragment } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity, FlatList, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}.`

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sendWhats() {
        Linking.openURL(`whatsapp://send?phone=${incident.whats}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity
                    style={styles.incident__button}
                    onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={[1]}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <Fragment>
                        <View style={styles.incident} >
                            <Text style={[styles.incident__property, { marginTop: 0 }]}>CASO:</Text>
                            <Text style={styles.incident__value}>{incident.title}</Text>

                            <Text style={styles.incident__property}>ONG:</Text>
                <Text style={styles.incident__value}>{incident.name} de {incident.city}/{incident.uf}</Text>

                            <Text style={styles.incident__property}>Descrição:</Text>
                            <Text style={styles.incident__value}>{incident.description}</Text>

                            <Text style={styles.incident__property}>Valor:</Text>
                            <Text style={styles.incident__value}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>
                        </View>

                        <View style={styles.incident__contactBox} >
                            <Text style={styles.contactBox__title}>Salve o dia!</Text>
                            <Text style={styles.contactBox__title}>Seja o herói desse caso.</Text>
                            <Text style={styles.contactBox__description}>Entre em contato:</Text>

                            <View style={styles.contactBox__actions}>
                                <TouchableOpacity style={styles.contactBox__action} onPress={sendWhats}>
                                    <Text style={styles.action__text}>WhatsApp</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.contactBox__action} onPress={sendMail}>
                                    <Text style={styles.action__text}>Email</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Fragment>
                )}
            />

        </View>
    );
};
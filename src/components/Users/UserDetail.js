import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../Common/Header';

const UserDetail = ({ route }) => {
    const { img, fname, lname, mail } = route.params;
    return (
        <ScrollView>
            <Header name="User Detail" />
            <View style={styles.view}>
                <Image source={{ uri: img }} style={styles.image} />
                <Text style={styles.text}>{fname} {lname}</Text>
                <Text style={styles.email}>{mail}</Text>
            </View>
            <View style={styles.page}>
                <Text style={styles.heading}>Heading 1</Text>
                <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={styles.heading}>Heading 2</Text>
                <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                <Text style={styles.heading}>Heading 3</Text>
                <Text style={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
        borderRadius: 90
    },
    view: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 5
    },
    text: {
        fontSize: 20,
        color: "green"
    },
    email: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black"
    },
    heading: {
        fontSize: 20,
        color: "#5A20CB"
    },
    content: {
        textAlign: "justify",
        color: "black"
    },
    page: {
        padding: 10
    }
});


export default UserDetail;
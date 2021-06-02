import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const [name, setName] = useState("");

    //reading data from async storage
    const readData = async () => {
        const data = await AsyncStorage.getItem('user');
        let username = JSON.parse(data);
        setName(username.name);
    }

    useEffect(() => {
        readData();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome {name}</Text>
            <Text style={styles.txt}>You have registered successfully</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    heading: {
        color: "#E21717",
        fontSize: 25
    },
    txt: {
        fontWeight: "bold"
    }

});



export default Home;
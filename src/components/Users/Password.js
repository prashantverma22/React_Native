import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Header from '../Common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Password = () => {

    const [oldPass, setOldPass] = useState("");  //old password
    const [newPass, setNewPass] = useState("");  //new password
    const [conPass, setConPass] = useState("");  //confirm password
    const [savePass, setSavePass] = useState("")  // storing password coming from signup page

    const readData = async () => {
        try {
            AsyncStorage.getItem('user').then((res) => {
                let userPass = JSON.parse(res);
                setSavePass(userPass.password);
                // console.log(userPass);
            });
            // const value = await AsyncStorage.getItem('user');
            // let userPass = JSON.parse(value);
            // setSavePass(userPass.password);
            // console.log(value);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        readData();
    }, [])

    const saveData = async () => {
        try {
            let data = await AsyncStorage.getItem('user');
            let value = JSON.parse(data);
            value.password = newPass;
            // console.log(value);
            await AsyncStorage.setItem('user', JSON.stringify(value));
        }
        catch (error) {
            console.log(error);
        }
        console.log("Password save() working.")
    }

    const validate = () => {
        const passReg = /^[A-Z]{1}[a-z0-9@#$_]{6}/;

        if (!(oldPass && newPass && conPass)) {
            Alert.alert("All fields are required.");
            return false;
        }

        if (!oldPass) {
            alert("This field is required.");
            return false;
        }
        else if (oldPass != savePass) {
            alert("Password doesn't match the old.")
            return false;
        }

        if (!newPass) {
            alert("This field is required.")
            return false;
        }
        else if (!(passReg.test(newPass))) {
            alert("Password is incorrect.")
            return false;
        }
        else if (newPass == savePass) {
            alert("Same as old password.")
        }

        if (!conPass) {
            alert("This field is required.")
            return false;
        }
        else if (conPass != newPass) {
            alert("Password doesn't match.")
            return false;
        }
        else {
            saveData();
            alert('Password changed successfully');
        }
    }

    return (
        <>
            <Header name="Change Password" style={styles.header} />
            <View style={styles.view}>
                {/* <Text>{savePass?.name}</Text> */}
                <Text></Text>
                <TextInput style={styles.ip} onChangeText={itr => setOldPass(itr)} placeholder="Old Password" secureTextEntry={true} />

                <TextInput style={styles.ip} onChangeText={itr => setNewPass(itr)} placeholder="New Password" secureTextEntry={true} />

                <TextInput style={styles.ip} onChangeText={itr => setConPass(itr)} placeholder="Confirm Password" secureTextEntry={true} />

                <TouchableOpacity onPress={validate} style={styles.button}>
                    <Text style={styles.buttonContent}>Change Password</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

export default Password;

const styles = StyleSheet.create({
    ip: {
        width: "90%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
        backgroundColor: "#0EB2BF"
    },
    header: {
        fontSize: 28
    },
    textStyle: {
        fontSize: 20,
        textAlign: "left"
    },
    view: {
        justifyContent: "center",
        alignItems: "center",
        padding: 18,
        marginTop: 20
    },
    button: {
        width: 120,
        backgroundColor: "#3DBE29",
        padding: 10,
        borderRadius: 60,
        marginTop: 8,
        alignItems: "center"
    },
    buttonContent: {
        fontWeight: "bold",
        textAlign: "center"
    }
});
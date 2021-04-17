import React, { useState } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

//background image
const image = { uri: "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=" };


const Signup = () => {
    //initializing states for all input fields.
    const [email, setEmail] = useState("prashant@gmail.com");
    const [name, setName] = useState("Prashant Verma");
    const [num, setNum] = useState("9775876662");
    const [pass, setPass] = useState("Pr@sh22");
    const [con, setCon] = useState("Pr@sh22");

    // const [modalOpen, setModalOpen] = useState(false);

    const navigation = useNavigation();

    //validating input fields with the help of regular expressions.
    const validateAndNavigate = () => {
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const nameReg = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
        const numReg = /\+?\d[\d -]{8,12}\d/;
        // const passReg = /^[a-zA-Z]\w{3,14}$/;
        const passReg = /^[A-Z]{1}[a-z0-9@#$_]{6}/

        if (!(email && name && num && pass && con)) {
            alert("All fields are required.")
            return false;
        }

        if (!email) {
            alert("Email is empty.")
            return false;
        }
        else if (!(emailReg.test(email))) {
            alert("Email is incorrect.")
            return false;
        }

        if (!name) {
            alert("Name is empty.")
            return false;
        }
        else if (!(nameReg.test(name))) {
            alert("Name is incorrect.")
            return false;
        }

        if (!num) {
            alert("Number is empty.")
            return false;
        }
        else if (!(numReg.test(num))) {
            alert("Number is incorrect.")
            return false;
        }

        if (!pass) {
            alert("Password is empty.")
            return false;
        }
        else if (!(passReg.test(pass))) {
            alert("Password is incorrect.")
            return false;
        }

        if (!con) {
            alert("Field is empty.")
            return false;
        }
        else if (con != pass) {
            alert("Password not matching");
            return false;
        }

        else {
            saveData();
            navigation.navigate('Login');
            //  , {
            // screen: 'Profile',
            //params: { email, name }
        }
    }

    //saving data with the help of async storage
    const saveData = async () => {
        let obj = {
            mail: email,
            name: name,
            num: num,
            password: pass
        }
        try {
            const val = JSON.stringify(obj);
            await AsyncStorage.setItem('user', val);
        }
        catch (e) {
            //save error
        }
        console.log("Done.");
    }

    return (
        <View>
            <ImageBackground source={image} style={styles.img} >
                <Image source={{ uri: "https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png" }} style={styles.logo} />
                <View style={styles.container}>
                    <TextInput value={email} onChangeText={e => setEmail(e)}
                        placeholder="Enter your email" style={styles.ip} />

                    <TextInput value={name} onChangeText={n => setName(n)}
                        placeholder="Enter your name" style={styles.ip} />

                    <TextInput value={num} onChangeText={c => setNum(c)}
                        placeholder="Enter your contact number" style={styles.ip} />

                    <TextInput value={pass} onChangeText={p => setPass(p)}
                        placeholder="Enter your password" style={styles.ip} secureTextEntry={true} />

                    <TextInput value={con} onChangeText={i => setCon(i)}
                        placeholder="Confirm password" style={styles.ip} secureTextEntry={true} />

                    <TouchableOpacity style={styles.button} onPress={validateAndNavigate}>
                        <Text style={{ color: "#FFFFFF" }}>Sign Up</Text>
                    </TouchableOpacity>

                    {/* <Modal animationType="slide" visible={modalOpen}
                        onRequestClose={() => {
                            Alert.alert("Modal closed.")
                            setModalOpen(!modalOpen);
                        }}>
                        <View>
                            <Pressable onPress={() => setModalOpen(!modalOpen)}>
                                <Text>Hide</Text>
                            </Pressable>
                        </View>
                    </Modal>

                    <Pressable onPress={() => setModalOpen(true)}>
                        <Text>show</Text>
                    </Pressable> */}

                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: 350,
        borderRadius: 10,
        padding: 10
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 15
    },
    ip: {
        width: "100%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
        backgroundColor: "#0EB2BF"
    },
    button: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "#4E4AAD",
        fontSize: 20,
        borderRadius: 10
    },
    btn: {
        paddingTop: 20,
        margin: 20
    },
    text: {
        color: "#FFFFFF",
        textDecorationLine: "underline",
        fontSize: 25,
    },
    link: {
        paddingTop: 20
    }
});

export default Signup;
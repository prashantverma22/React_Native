import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//background image
const image = { uri: "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=" };


const Login = () => {
    //initializing states for all input fields.
    const [email, setEmail] = useState("prashant@gmail.com");
    const [pass, setPass] = useState("Pr@sh22");

    const [mailData, setMailData] = useState("");
    const [passData, setPassData] = useState("");

    //initializing states for error messages.
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);

    const navigation = useNavigation();

    //validating input fields with the help of regular expressions
    const validateForm = () => {
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const passReg = /^[A-Z]{1}[a-z0-9@#$_]{6}/;

        if (!(email || pass)) {
            setEmailError(true);
            setPassError(true);
            return false;
        }
        else if (!email || (email && emailReg.test(email)) == false) {
            setEmailError(true);
            return false;
        }
        else if (email != mailData) {
            setEmailError(true);
            return false;
        }
        else if (email && emailReg.test(email) == true) {
            setEmailError(false);
        }


        if (!pass || (pass && passReg.test(pass)) == false) {
            setPassError(true);
            return false;
        }
        else if (pass != passData) {
            setPassError(true);
            return false;
        }
        else if (pass && passReg.test(pass) == true) {
            setPassError(false);
        }

        alert("Successfully Logged In");
        navigation.navigate('AppDrawer', {
            screen: 'Home'
        });
    }

    //reading data from async storage
    const readData = async () => {
        try {
            const data = await AsyncStorage.getItem('user');
            let userData = JSON.parse(data);
            setMailData(userData.mail);
            setPassData(userData.password);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        readData();
    }, [])

    return (
        <View>
            <ImageBackground source={image} style={styles.img}>
                <Image source={{
                    uri: "https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png"
                }} style={styles.logo} />
                <View style={styles.container}>
                    <TextInput onChangeText={e => setEmail(e)}
                        placeholder="Enter your email" style={styles.input} />

                    {emailError && <Text style={{ color: "red" }}>Invalid Email</Text>}

                    <TextInput onChangeText={p => setPass(p)}
                        placeholder="Enter your password" style={styles.input} secureTextEntry={true} />
                    {passError && <Text style={{ color: "#FF0000" }}>Invalid Password</Text>}

                    <TouchableOpacity style={styles.btn} onPress={() => validateForm()}>
                        <Text style={{ color: "#FFFFFF" }}>Login</Text>
                    </TouchableOpacity >
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
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    input: {
        width: '80%',
        padding: 10,
        margin: 10,
        fontSize: 16,
        fontWeight: "bold",
        borderRadius: 10,
        backgroundColor: "#0EB2BF"
    },
    btn: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "#4E4AAD",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 10
    },
    link: {
        paddingTop: 20
    },
    txt: {
        color: "#FFFFFF",
        textDecorationLine: "underline",
        fontSize: 25
    }
});


export default Login;
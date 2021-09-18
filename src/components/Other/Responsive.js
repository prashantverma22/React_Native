import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { wpx, hpx, wp, hp, nf } from './constants';

//background image
const image = { uri: "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=" };

const Login = () => {

    return (
        <View>
            <ImageBackground source={image} style={styles.img}>
                <Image source={{
                    uri: "https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png"
                }} style={styles.logo} />
                <View style={styles.container}>
                    <TextInput placeholder="email" style={styles.input} />
                    <TextInput placeholder="password" style={styles.input} secureTextEntry={true} />
                    <TouchableOpacity style={styles.btn}>
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
        width: wp(80),
        borderRadius: 10,
        padding: 10
    },
    img: {
        width: wp(100),
        height: hp(100),
        resizeMode: "cover",
        alignItems: "center"
    },
    logo: {
        width: wpx(100),
        height: hpx(100),
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    input: {
        width: wp(75),
        padding: wpx(10),
        margin: wpx(10),
        fontSize: nf(16),
        fontWeight: "bold",
        borderRadius: wpx(10),
        backgroundColor: "#0EB2BF"
    },
    btn: {
        alignItems: "center",
        padding: wpx(10),
        backgroundColor: "#4E4AAD",
        fontSize: nf(20),
        fontWeight: "bold",
        borderRadius: 10
    },
    link: {
        paddingTop: 20
    },
    txt: {
        color: "#FFFFFF",
        textDecorationLine: "underline",
        fontSize: nf(25)
    }
});


export default Login;
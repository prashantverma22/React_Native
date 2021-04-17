import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground
}
    from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const image = { uri: "https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA=" };

const Responsive = () => {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View>
            <View>
                {/* <ImageBackground source={image} > */}
                <Image source={{
                    uri: "https://www.pikpng.com/pngl/m/60-602888_logo-globe-png-globe-clip-art-transparent-png.png"
                }}
                />
                <Text>Responsive UI</Text>
                <View style={styles.content}>
                    <TextInput placeholder="Enter your email" />

                    <TextInput placeholder="Enter your password" />

                    <TouchableOpacity>
                        <Text>Login</Text>
                    </TouchableOpacity >
                </View>
                {/* </ImageBackground> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        width: wp('84.5%'),
        height: hp('17%')
    }
})

export default Responsive;
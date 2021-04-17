import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { useNavigation } from '@react-navigation/native';

const Header = ({ name, showBack = true, leftIcon = null }) => {

    //using the navigation hook for navigating to screens.
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.view}>

                {showBack ?
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Icon type="Ionicons" name="arrow-back" style={styles.icon} />
                    </TouchableOpacity>
                    :
                    leftIcon
                }

                <Text style={styles.text}>{name}</Text>

                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon type="Ionicons" name="menu-sharp" style={styles.icon} />
                </TouchableOpacity>
            </View>

            {/* Displaying data through FlatList */}
            {/* <View style={styles.list} >
                <FlatList data={Items} renderItem={
                    ({ item }) => (
                        <Text style={styles.text}>{item.name}</Text>
                    )
                }
                />
            </View> */}
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        height: 55,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#0EB2BF"
    },
    text: {
        fontSize: 24,
        color: "white"
    },
    icon: {
        fontSize: 35,
        marginTop: 2,
        padding: 5,
        color: "#4E4AAD"
    }
    // list: {
    //     justifyContent: "center",
    //     alignItems: "center",
    //     padding: 10
    // }
});

export default Header;
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../Common/Header';
import { useNavigation } from '@react-navigation/native';

const UserList = () => {

    const navigation = useNavigation();

    //dummy data for flatlist
    const List = [
        {
            "id": 1,
            "email": "george.bluth@reqres.in",
            "first_name": "George",
            "last_name": "Bluth",
            "avatar": "https://reqres.in/img/faces/1-image.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "first_name": "Janet",
            "last_name": "Weaver",
            "avatar": "https://reqres.in/img/faces/2-image.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "first_name": "Eve",
            "last_name": "Holt",
            "avatar": "https://reqres.in/img/faces/4-image.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "first_name": "Charles",
            "last_name": "Morris",
            "avatar": "https://reqres.in/img/faces/5-image.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "first_name": "Tracey",
            "last_name": "Ramos",
            "avatar": "https://reqres.in/img/faces/6-image.jpg"
        },
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ];

    return (
        <View style={{ flex: 1 }}>
            <Header name="Users" />
            <FlatList data={List} renderItem={
                ({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity style={styles.mainView}
                                onPress={() => {
                                    //navigating the data on the 'User Detail' screen in the form of an object.
                                    navigation.navigate('User Detail', {
                                        img: item.avatar,
                                        fname: item.first_name,
                                        lname: item.last_name,
                                        mail: item.email
                                    });
                                }} >
                                <Image source={{ uri: item.avatar }} style={styles.avtar} />
                                <View style={styles.nestedView}>
                                    <Text style={styles.text}>{item.first_name} {item.last_name}</Text>
                                    <Text>{item.email}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }
            }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    avtar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    mainView: {
        flexDirection: "row",
        padding: 16,
    },
    nestedView: {
        flexDirection: "column",
        padding: 20,
        margin: 12
    },
    text: {
        color: "#5A20CB",
        fontSize: 16
    }
});

export default UserList;
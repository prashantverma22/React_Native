import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Modal, Pressable, Alert } from 'react-native';
import Header from '../Common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import { Icon } from 'native-base';

const Profile = () => {

    //initializing states for input fields that is to be edited.
    const [img, setImg] = useState("https://reqres.in/img/faces/2-image.jpg");
    const [myName, setMyName] = useState("");
    const [myNum, setMyNum] = useState("");
    const [myMail, setMyMail] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    //edit mode
    const [editMode, setEditMode] = useState(false);

    //reading data from async storage
    const readData = async () => {
        try {
            const data = await AsyncStorage.getItem('user');
            //updating the state and parsing the data as it may be in the form of an object.
            let userData = JSON.parse(data);
            setMyMail(userData.mail);
            setMyName(userData.name);
            setMyNum(userData.num);
            if (userData.profile) {
                setImg(userData.profile);
            }
        }
        catch (e) {
            //catcing errors.
            alert(e)
        }
        console.log("working.")
    }

    //useEffect hook lets you perform side effects in a component.
    //Data fetching is an example.
    //Data will be displayed with the help of readData() function.
    useEffect(() => {
        if (!editMode) {
            readData();
        }
    }, [editMode])

    //saving data in async storage again after editing
    const saveData = async () => {
        let obj = {
            mail: myMail,
            name: myName,
            num: myNum,
            profile: img
        }
        try {
            const val = JSON.stringify(obj);
            await AsyncStorage.setItem('user', val)
            setEditMode(!editMode);
        }
        catch (e) {
            alert(e);
        }
        console.log("data saved in async storage");
    }

    const validate = () => {
        const emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const nameReg = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
        const numReg = /\+?\d[\d -]{8,12}\d/;

        if (!(myMail && myName && myNum)) {
            Alert.alert("All fields are required.");
            return false;
        }

        if (!myMail) {
            alert("Email is empty.");
            return false;
        }

        else if (!(emailReg.test(myMail))) {
            alert("Email is incorrect.")
            return false;
        }

        if (!myName) {
            alert("Name is empty.")
            return false;
        }
        else if (!(nameReg.test(myName))) {
            alert("Name is incorrect.")
            return false;
        }

        if (!myNum) {
            alert("Number is empty.")
            return false;
        }
        else if (!(numReg.test(myNum))) {
            alert("Number is incorrect.")
            return false;
        }
        else {
            saveData();
        }
    }

    const chooseFromGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImg(image.path);
        }).catch(err => {
            console.log(err);
        });
    }

    const takeFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            setImg(image.path);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <>
            <Header name="Profile" showBack={false} leftIcon={
                <TouchableOpacity onPress={() => setEditMode(!editMode)}>
                    {/* edit mode is on */}
                    {!editMode ? <Icon type="FontAwesome5" name="user-edit" style={styles.icon} /> : null}
                </TouchableOpacity>
            } />
            <View>
                <View style={styles.view}>
                    <Image source={{ uri: img }} style={styles.img} />
                    {editMode ?
                        <Pressable style={styles.cameraIcon} onPress={() => setModalOpen(true)}>
                            <Icon type="Ionicons" name="camera" />
                        </Pressable> : null}

                </View>

                <Modal animationType="slide" transparent={true} visible={modalOpen} onRequestClose={() => {
                    setModalOpen(!modalOpen);
                }}>
                    <View style={styles.modalView}>
                        <Pressable onPress={takeFromCamera} style={styles.press}>
                            <Text style={styles.text}>Open Camera</Text>
                        </Pressable>
                        <Pressable onPress={chooseFromGallery} style={styles.press}>
                            <Text style={styles.text}>Open Gallery</Text>
                        </Pressable>
                        <Pressable onPress={() => setModalOpen(false)} style={styles.cancel}>
                            <Text style={styles.text}>Cancel</Text>
                        </Pressable>
                    </View>
                </Modal>

                <View style={styles.fields}>
                    <TextInput editable={editMode} style={styles.textInput} onChangeText={itr => setMyMail(itr)} value={myMail} />

                    <TextInput editable={editMode} style={styles.textInput} onChangeText={itr => setMyName(itr)} value={myName} />

                    <TextInput editable={editMode} style={styles.textInput} onChangeText={itr => setMyNum(itr)} value={myNum} />

                </View>

                {editMode ?
                    <View style={styles.modeView}>
                        <TouchableOpacity style={styles.save} onPress={validate} >
                            <Text style={styles.text}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancel} onPress={() => {
                            setEditMode(!editMode);
                        }}>
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    : null}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    textInput: {
        width: "90%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
        backgroundColor: "#0EB2BF"
    },
    modalView: {
        backgroundColor: "white",
        padding: 50,
        borderRadius: 20,
        marginTop: 100,
        margin: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    press: {
        width: 150,
        borderWidth: 3,
        borderColor: "#0EB2BF",
        backgroundColor: "#0EB2BF",
        padding: 10,
        borderRadius: 20,
        marginTop: 8,
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        color: "#0D0D0D"
    },
    save: {
        width: 150,
        borderWidth: 3,
        borderColor: "#3DBE29",
        backgroundColor: "#3DBE29",
        padding: 10,
        borderRadius: 20,
        marginTop: 8,
        alignItems: "center"
    },
    cancel: {
        width: 150,
        borderWidth: 3,
        borderColor: "#E21717",
        backgroundColor: "#E21717",
        padding: 10,
        borderRadius: 20,
        marginTop: 8,
        alignItems: "center"
    },
    modeView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 8,

    },
    cameraIcon: {
        // bottom: 2,
        // right: -50,
        // position: "absolute",
        position: "absolute",
        bottom: 8,
        right: 135
    },
    fields: {
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        fontSize: 30,
        marginTop: 2,
        padding: 5,
        color: "#4E4AAD"
    },
    img: {
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: "#4E4AAD",
    }
})

export default Profile;
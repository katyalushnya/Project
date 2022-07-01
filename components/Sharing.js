import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function Shared() {
    let [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
        //просим разрешение к галерее
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    let openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
            alert(`вышла ошибочка, невозможео пошерить`);
            return;
        }

        await Sharing.shareAsync(selectedImage.localUri);
    };

    if (selectedImage !== null) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
                <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
                    <Text style={styles.buttonText}>Пошерить фото</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_148071.png' }} style={styles.logo} />
            <Text style={styles.instructions}>
                Чтобы пошерить фото нажмите на кнопку ниже
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Выбрать фото</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff9df',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 326,
        height: 245,
        marginBottom: 20,
    },
    instructions: {
        color: '#69674e',
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
        textAlign:"center",
    },
    button: {
        backgroundColor: '#73b786',
        padding: 20,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff9df',
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});

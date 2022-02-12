import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ImageBackground, Button} from 'react-native';
import styles from '../style/app.style'
import formStyles from '../style/form.style'
import loadingBg from '../assets/loading.jpg'
import eventService from '../services/eventService';

function EditScreen({ navigation }) {
    const id = navigation.getParam("id");

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function onSaveEvent(){
        await eventService.saveEvent(id,title,description);
        navigation.navigate('Home' ,{key:new Date()})
    } 
    async function loadEvent(){
        const event = await eventService.getEventById(id)
        setTitle(event.title)
        setDescription(event.description)
    }

    useEffect(()=>{
        loadEvent()
    } ,[id])

    return <View style={styles.container} >
        <ImageBackground style={styles.backgroundImage} source={loadingBg} >
            <View style={formStyles.form} >
                <Text style={styles.logoText}>{id ? 'Edit Event' : 'New Event'}</Text>
                <TextInput style={formStyles.input}
                    placeholderTextColor="#444" placeholder="Event title"
                     value={title} onChangeText={setTitle} />
                <TextInput
                    placeholderTextColor="#444" style={formStyles.input} placeholder="Description"
                    value={description} onChangeText={setDescription} 
                    multiline={true}
                    numberOfLines={4} />
                <Button onPress={onSaveEvent} title="save">Save</Button>
            </View>
        </ImageBackground>
    </View>
}

EditScreen.navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
        title: params.id ? 'Edit Event' : 'New Event',
    };
};




export default EditScreen
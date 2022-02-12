import React from 'react'
import { Text,  TouchableOpacity,Button,Alert} from 'react-native';
import eventStyles from '../style/events.style'
import { NavigationEvents } from 'react-navigation';
export default function({item , navigation}){
    function onEventPress(){
        navigation.navigate('Edit' , {id:item.id})  
    }
    return <TouchableOpacity style={eventStyles.item} onPress={onEventPress}>
        <Text style={eventStyles.title}>
             {item.title}
        </Text>
       
    </TouchableOpacity>
}
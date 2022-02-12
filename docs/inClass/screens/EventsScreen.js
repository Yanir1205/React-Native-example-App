import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import styles from '../style/app.style'
import eventService from '../services/eventService'
import eventStyles from '../style/events.style'
import loadingBg from '../assets/loading.jpg'
import LoadingScreen from './LoadingScreen'
import EventList from '../cmps/EventList'; 
import axios from 'axios';
import { useFocusEffect } from 'react-navigation-hooks'

export default function EventScreen({ navigation }) {
  const key = navigation.getParam("key");
  const [bit, setBit] = useState(0);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setLoading(true)
    load();
  }, [key]);

  async function load() {
    axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    .then(res => {
      setBit(res.data);
    })
    const events = await eventService.query();
    setEvents(events)
    setLoading(false)
  }


  // useEffect(() => {
  //   focusEvent = navigation.addListener('didFocus', () => {
  //     setLoading(true)
  //     load();
  //   });

  //   return () => focusEvent.remove()
  // }, []);

  if (loading) return <LoadingScreen></LoadingScreen>

  function onAddEvent() {
    navigation.navigate('Edit')
  }

  return (<View style={styles.container} >
    <ImageBackground style={styles.backgroundImage} source={loadingBg} >
      <View style={eventStyles.buttons}>
        <TouchableOpacity onPress={onAddEvent} >
          <Image
            style={{ width: 30, height: 30, margin: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}></Image>
        </TouchableOpacity>
        <Text>{bit}</Text>
      </View>
      <EventList events={events} navigation={navigation}></EventList>
    </ImageBackground>
  </View>)
}

import React from 'react'
import { FlatList} from 'react-native';
import eventStyles from '../style/events.style'
import EventPreview from './EventPreview';

export default function({events , navigation}){
    return  <FlatList style={eventStyles.list}
    keyExtractor={(item, index) => index.toString()}
    data={events}
    renderItem={({ item }) => <EventPreview item={item} navigation={navigation}></EventPreview>}
  />
}
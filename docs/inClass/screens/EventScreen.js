import React, { useEffect ,useState} from 'react';
import { View, ImageBackground, Image , TouchableOpacity , TextInput} from 'react-native';
import styles from '../style/app.style'
import eventService from '../services/eventService'
import eventStyles from '../style/events.style'
import loadingBg from '../assets/loading.jpg'
import LoadingScreen from './LoadingScreen'  

export default function EventScreen() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [txt, setTxt] = useState('');

  async function load() {
    setEvents(await eventService.query())
    setLoading(false)
  }
  useEffect(() => {
    load();
  }, []);
  
  if (loading) return <LoadingScreen></LoadingScreen>

  else return (<View style={styles.container} >
    <ImageBackground style={styles.backgroundImage} source={loadingBg} >
      <View style={eventStyles.buttons}>
        <Image
          style={{ width: 30, height: 30, margin: 10 }}
          source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
        />
        <TouchableOpacity >
          <Image
            style={{ width: 30, height: 30, margin: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }}></Image>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>)
}

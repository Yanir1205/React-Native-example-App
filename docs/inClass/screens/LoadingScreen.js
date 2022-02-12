import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from '../style/app.style'
import loadingImage from '../assets/loading.jpg'

export default function App() {
    return (
      <View style={styles.container} >
        <ImageBackground style={styles.backgroundImage} source={loadingImage} >
  
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
              whohoo
          </Text>
            <Text style={styles.logoDescription}>
              Loadiiiiiiiiing
          </Text>
  
          </View>
        </ImageBackground>
      </View>
    )
}

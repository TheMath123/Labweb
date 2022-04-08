import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [region, setRegion] = useState<Region>({
    latitude: -23.00,
    longitude: -44,
    latitudeDelta: 0.014,
    longitudeDelta: 0.014
  })

  useEffect(() => {
    teste()
  }, [])
  
  async function teste(){
    const position = await Location.getCurrentPositionAsync({accuracy: 0.1})

    let locate = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.014,
      longitudeDelta: 0.014
    }

    setRegion(locate)
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%'
  }
});
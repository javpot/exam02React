import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';

export default function Map({route}) {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    if (route.params) {
      const {latitude, longitude} = route.params;

      setRegion({
        ...region,
        latitude: latitude || 0,
        longitude: longitude || 0,
      });
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {route.params && (
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title={route.params.banner || 'Unknown'}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function CityCard({city}) {
  const navigation = useNavigation(); // Utiliser useNavigation ici

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Map', city);
      }}>
      <View style={styles.container1}>
        <Text style={styles.font}>{city.banner}</Text>
        <Text>{city.city}</Text>
        <View style={styles.container2}>
          <Text>Last visit: {city.lastVisit}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    height: 60,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 15,
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  font: {
    fontSize: 18,
  },
});

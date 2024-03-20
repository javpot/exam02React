import {View, Text, FlatList, StyleSheet, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCities} from '../state/citySlice';
import CityCard from '../Composant/CityCard';

export default function Home() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const cities = useSelector(state => state.city.value);

  useEffect(() => {
    dispatch(fetchCities()).then(action => {
      setFilteredCities(action.payload);
    });
  }, [dispatch]);

  useEffect(() => {
    setFilteredCities(
      cities.filter(
        city => city.city.includes(text) || city.banner.includes(text),
      ),
    );
  }, [text, cities]);

  return (
    <FlatList
      style={{alignSelf: 'center', width: '100%'}}
      data={filteredCities}
      renderItem={({item}) => <CityCard city={item} />}
      ListHeaderComponent={
        <TextInput
          style={styles.input}
          placeholder="Rechercher.."
          onChangeText={setText}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '70%',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 0.4,
    borderRadius: 5,
    marginBottom: 15,
    alignSelf: 'center',
  },
});

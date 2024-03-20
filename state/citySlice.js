import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Notifications} from 'react-native-notifications';

// Initialiser countId à l'extérieur de initialState pour qu'il soit global au fichier

const initialState = {
  value: [],
};

// Action asynchrone créée avec createAsyncThunk
export const fetchCities = createAsyncThunk('city/fetchCities', async () => {
  try {
    const response = await axios.get(
      'https://my-json-server.typicode.com/frederic-s-f/252-mock-data/stores',
    );
    let stores = response.data.map(element => {
      return element;
    });
    saveStoresData(stores);
    return stores;
  } catch (error) {
    console.error('Failed to fetch stores', error);
    throw error;
  }
});

const saveStoresData = async stores => {
  try {
    const data = stores;
    const jsonData = JSON.stringify(data);

    await AsyncStorage.setItem('stores', jsonData);
    console.log('saved');
    Notifications.postLocalNotification({
      body: 'Les magasins sont saved!',
      title: 'Saved',
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement des magasins:", error);
  }
};
const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCities.fulfilled, (state, action) => {
      console.log('fetching...');
      state.value = action.payload;
    });
  },
});

export default citySlice.reducer;

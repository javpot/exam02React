import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const initialState = {
  isLogged: false,
};
export const loadData = createAsyncThunk(
  'authSlice/login',
  async ({username, password}) => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData !== null) {
        const user = JSON.parse(userData);
        if (user.username === username && user.password === password) {
          console.log('connected');

          return {status: 200, message: 'Connexion réussie', user: user};
        } else {
          Alert.alert('Identifiant ou mot de passe incorrect.');
          // Vous pourriez vouloir retourner un autre statut ou valeur indiquant l'échec
          console.log('error');
          return {
            status: 401,
            message: 'Identifiant ou mot de passe incorrect.',
          };
        }
      } else {
        Alert.alert("Aucun compte enregistré. Veuillez d'abord vous inscrire.");
        // Retourner un statut pour indiquer qu'aucun utilisateur n'est enregistré
        return {status: 404, message: 'Aucun compte enregistré.'};
      }
    } catch (error) {
      console.error(
        'Erreur lors de la récupération des données utilisateur:',
        error,
      );
      // Retourner une réponse d'erreur
      return {status: 500, message: 'Erreur serveur', error: error};
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isLogged = true;
    },
    signout: state => {
      state.isLogged = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      state.isLogged = action.payload.status === 200;
    });
    // Vous pouvez également gérer les autres états ici, par exemple:
    // .addCase(incrementAsync.pending, (state, action) => {
    //   // Manipulation de l'état en cas de pending
    // })
    // .addCase(incrementAsync.rejected, (state, action) => {
    //   // Manipulation de l'état en cas de rejected
    // });
  },
});

export default authSlice.reducer;

export const {login, signout} = authSlice.actions;

import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../state/authSlice';
import cityReduer from '../state/citySlice';
export default store = configureStore({
  reducer: {
    auth: authReducer,
    city: cityReduer,
  },
});

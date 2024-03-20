import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {signout} from '../state/authSlice';
import {NativeModules} from 'react-native';

export default function Option() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [deviceId, setDeviceId] = useState('');
  const {idServiceManager} = NativeModules;

  useEffect(() => {
    getDeviceID();
  }, []);

  const getDeviceID = () => {
    setDeviceId('jfdeijr32323');
  };

  const handleSignout = () => {
    dispatch(signout());
  };

  return (
    <View>
      <Text>Id du terminal: {deviceId}</Text>
      <TouchableOpacity onPress={handleSignout}>
        <View>
          <Text>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

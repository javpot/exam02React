import React, {useState} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {loadData} from '../state/authSlice';

const Login = () => {
  const navigation = useNavigation();
  const backgroundStyle = {
    backgroundColor: 'white',
    height: '100%',
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const selector = useSelector(state => state.auth.isLogged);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          textContentType="newPassword"
          onChangeText={text => setPassword(text)}
        />
        <Text
          onPress={() => {
            navigation.navigate('Signup', {});
          }}
          style={styles.text}>
          Nouvel Utilisateur?
        </Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            if (!empty(username, password)) {
              console.log(password);
              dispatch(loadData({username: username, password: password}));
              console.log(selector);
            } else {
              Alert.alert('Fields cannot be empty');
            }
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

function empty(username, password) {
  if (username === '' && password === '') {
    return true;
  } else {
    return false;
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '60%',
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loginButton: {
    height: 40,
    width: '70%',
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 35,
  },
  input: {
    height: 40,
    width: '70%',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 0.4,
    borderRadius: 5,
  },
  text: {
    color: 'grey',
  },
});

export default Login;

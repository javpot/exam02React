import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const backgroundStyle = {
    backgroundColor: 'white',
    height: '100%',
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveData = async () => {
    try {
      const userData = {
        username: username,
        password: password,
      };
      const jsonData = JSON.stringify(userData);

      await AsyncStorage.setItem('user', jsonData);

      navigation.navigate('Login');
    } catch (error) {
      console.error(
        "Erreur lors de l'enregistrement des données utilisateur:",
        error,
      );
    }
  };

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
            navigation.navigate('Login', {});
          }}
          style={styles.text}>
          Deja un compte?
        </Text>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            if (empty(username, password)) {
              saveData();
            } else {
            }
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

function empty(username, password) {
  if (username === '' && password === '') {
    return false;
  } else {
    return true;
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
  signupButton: {
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

export default SignUp;

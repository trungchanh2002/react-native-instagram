import React, { useState } from 'react';
import { StatusBar, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        console.log("Password and Confirm Password don't match");
        return;
      }
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Sign up successful');
        navigation.navigate('LoginScreen');
      } else {
        console.log('Sign up failed');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  const navigateToSignIn = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Instagram Logo-black.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <Text style={styles.signInText}>
        Already have an account?{' '}
        <TouchableOpacity style={styles.signInLink} onPress={navigateToSignIn}>
          Sign In
        </TouchableOpacity>
      </Text>

      <View style={styles.footerContainer}>
        <Text>Instagram or FaceBook</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 182,
    height: 49,
    marginBottom: 60, 
  },
  input: {
    height: 40,
    width: 357,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    width: 357,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    marginHorizontal: 8,
    color: 'gray',
  },
  signInText: {
    marginTop: 16,
  },
  signInLink: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  footerContainer: {
    marginTop: 80,
  },
});

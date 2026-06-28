import * as React from 'react';
import { View, Text, TextInput, Pressable, Image, Alert, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/favicon.png')}
        style={styles.logo}
      />

      <Text style={styles.tagline}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable
        style={styles.button}
        onPress={() =>
          Alert.alert('Thanks for Subscribing!', 'Stay tuned for more updates.', [{ text: 'OK' }])
        }
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  tagline: {
    color: '#0e3d00',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  input: {
    width: '70%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '50%',
    backgroundColor: '#ebca25',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0e3d00',
    fontSize: 16,
    fontWeight: '600',
  },
});
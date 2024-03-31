import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>100¥</Text>
      </View>
      <Image source={require('./assets/coinFront.png')} style={styles.image} />
      <Image source={require('./assets/logo.png')} style={styles.logo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#D6F35C',
    width: '100%',
    padding: 20,
  },
  headerText: {
    textAlign: 'center',
    color: '#3A566E',
    fontSize: 24,
  },
  image: {
    flex:10,
    width: 300,
    height: 300,
  },
  footer: {
    flex:1,
    width:"100%",
    flexDirection: 'row',
    backgroundColor: '#4BA0A3',
    padding: 20,
    display:"flex",
    justifyContent:"center"
  },
  footerText: {
    borderRadius: 16
  },
  linkText: {
    color: '#A1C4D4',
  },
  logo: {
    flex:2,
    width: 500,
    height: 100,
    objectFit:"contain"
  },
});

export default App;

import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
const SuccessPage = () => {
  const navigation = useNavigation();

   useEffect(() => {
      const backAction = () => {
        navigation.popToTop();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', backAction);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backAction);
      };
    }, [navigation]);

  const handleGoBack = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://your-url-here.com/your-success-gif.gif' }} // For remote GIF
        style={styles.gif}
        resizeMode="contain"
      />
      <Text style={styles.description}>Your action was completed successfully.</Text>
      <Button title="Go Back" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  gif: {
    width: 300, // Set width as per the size of the GIF
    height: 300, // Set height as per the size of the GIF
    marginBottom: 20, // Space between GIF and text
  },
});

export default SuccessPage;

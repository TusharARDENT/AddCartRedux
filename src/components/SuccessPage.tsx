import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, BackHandler, TouchableOpacity } from 'react-native';
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
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktwVyx-qx30ttml_3AqPzIFc66iK9R2XHrA&s' }} // For remote GIF
        style={styles.gif}
        resizeMode="contain"
      />
      <Text style={styles.description}>Your action was completed successfully.</Text>
      <TouchableOpacity onPress={handleGoBack} >
        <Text style={styles.shopMoreBtn}>Shop More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor : '#FEFCF3',
  },
  successMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
  },
  description: {
    fontSize: 20,
    fontWeight : 700,
    textAlign: 'center',
    padding : 20,
    borderRadius : 10,
    marginBottom: 20,
    color : '#A79277',
  },
  gif: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  shopMoreBtn : {
    fontSize : 20,
    fontWeight : 700,
    backgroundColor : '#E2F4C5',
    padding : 20,
    borderRadius : 10,
  }
});

export default SuccessPage;

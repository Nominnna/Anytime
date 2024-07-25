import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const bodyTypes = [
  { id: '1', image: require('../Images/Slim.png'), weight: '70 - 75', mass: '70 - 75', margin: 40 },
  { id: '2', image: require('../Images/SlimShredded.png'), weight: '80 - 85', mass: '80 - 85', margin: -40 },
  { id: '3', image: require('../Images/beachBody.png'), weight: '90 - 95', mass: '90 - 95', margin: 40 },
  { id: '4', image: require('../Images/Hero.png'), weight: '100 - 105', mass: '100 - 105', margin: -40 },
  { id: '5', image: require('../Images/BodyBuilder.png'), weight: '110 - 115', mass: '110 - 115', margin: 40 },
];

const { width } = Dimensions.get('window');

const BodyTypeCarousel = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.bodyContainer, { marginHorizontal: item.margin || 15 }]}>
      <Image source={item.image} style={styles.bodyImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text} >Жин: {item.weight}</Text>
        <Text style={styles.text}>Булчингийн Масс: {item.mass}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={bodyTypes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width * 0.7}
      decelerationRate="fast"
      contentContainerStyle={styles.carouselContainer}
    />
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  bodyContainer: {
    width: width * 0.7,
    alignItems: 'center',
  },
  bodyImage: {
    width: '100%',
    height: width,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Nunito_700Bold',
  },
});

export default BodyTypeCarousel;

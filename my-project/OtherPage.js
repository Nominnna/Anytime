// OtherPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function OtherPage({ route }) {
  // Destructure the id from route.params
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Image ID: {id}</Text>
      {/* Use the id as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default OtherPage;

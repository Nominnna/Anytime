// NoPlan.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook

const { height } = Dimensions.get('window');

const NoPlan = () => {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <View style={styles.noPlanContainer}>
      <View style={styles.addButton}>
        <TouchableOpacity onPress={() => navigation.navigate('FitnessApp')}>
          <Text style={styles.plan_date}>Зөвхөн таньд зориулсан шинэ {'\n'}төлөвлөгөө үүсгэцгээе</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noPlanContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    padding: 10,
    width: '90%',
    height: height * 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(152, 0, 255, 0.3)",
    borderRadius: 20,
    borderColor: "#9800FF",
    borderWidth: 2,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  plan_date: {
    marginVertical: 2,
    width: '100%',
    padding: 2,
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: height * 0.022,
    color: "#fff",
  }
});

export default NoPlan;

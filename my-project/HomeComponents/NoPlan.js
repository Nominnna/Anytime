import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NoPlan = ({ addNewPlan }) => (
  <View style={styles.noPlanContainer}>
    <TouchableOpacity style={styles.addButton} onPress={addNewPlan}>
    <Text style={styles.plan_date}>Зөвхөн танд зориулсан шинэ {'\n'}төлөвлөгөө үүсгэцгээе</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  noPlanContainer: {
    width:'100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noPlanText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  addButton: {
    padding: 10,
    width: '90%',
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9800FF',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  plan_date: {
    marginVertical:2,
    width: '100%',
    padding:2,
    fontWeight: "bold",
    textAlign:'center',
   fontSize: 16,
   color: "#fff",
   }
});

export default NoPlan;
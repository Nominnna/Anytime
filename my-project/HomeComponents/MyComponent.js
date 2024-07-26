import React from "react";
import Header from "./Header";
import UserInfo from "./UserInfo";
import Calendar from "./Calendar";
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import WorkoutPlan from "./WorkoutPlan";
import User from './User'

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState(null);
  const Ex_user= new  User("Тамир",23,170,57);
  return (
    <>
     <Header/>
     <UserInfo  Name={Ex_user.Name}  Pro_pic={Ex_user.Pro_pic} Age={Ex_user.Age}   Height={Ex_user.Height}  Weight={Ex_user.Weight} />
     <View>
      <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
    </View>
    <WorkoutPlan/>
    </>
  );
}

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
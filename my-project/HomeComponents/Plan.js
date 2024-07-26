// PlanList.js
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Plan = ({ plans, addNewPlan }) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.plansContainer}>
        {plans.map((plan) => (
          <View style={styles.plan}>
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.planDate}>үүсгэсэн: {plan.date}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addNewPlan}>
        <View style={styles.plan}>
          <AntDesign name="plus" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: "90%",
  },

  scrollView: {
    paddingVertical: 20,
  },
  plansContainer: {
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  plan: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9800FF",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  planTitle: {
    fontSize: 17,
    paddingVertical: 2,
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
  },
  planDate: {
    color: "#fff",
  },
  addButton: {
    width: "95%",
    backgroundColor: "#8e2de2",
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Plan;
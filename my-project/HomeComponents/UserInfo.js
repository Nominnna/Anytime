import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Fontisto } from '@expo/vector-icons';

const UserInfo = ({ Name, Pro_pic, Age, Height, Weight }) => {
  return (
    <ImageBackground
      source={require("../assets/top_bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.userInfo}>
        <View style={styles.general_info}>
          <View style={styles.profile_pic}>
            {
              <Image
                source={require("../assets/profile_picture.png")}
                style={styles.proimage}
              />
            }
          </View>
          <View style={styles.name}>
            <Text style={styles.greeting}>Тавтай морил!</Text>
            <Text style={styles.userName}>{Name}</Text>
          </View>
        </View>
        <View style={styles.userDetails}>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
            <FontAwesome name="balance-scale" size={20} color="#ffffff" />
            </View>
            <Text style={styles.userDetail1}>{Weight}КГ</Text>
            <Text style={styles.userDetail}>ЖИН</Text>
          </View>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
            <MaterialCommunityIcons name="human-male-height-variant" size={20} color="#ffffff" />
            </View>
            <Text style={styles.userDetail1}>{Height}</Text>
            <Text style={styles.userDetail}>ӨНДӨР</Text>
          </View>
          <View style={styles.userDetailContainer}>
            <View style={styles.icon_base}>
            <Fontisto name="heartbeat-alt" size={24} color="#ffffff" />
            </View>
            <Text style={styles.userDetail1}>{Age}</Text>
            <Text style={styles.userDetail}>НАС</Text>
          </View>
        </View>
      </View>
      <View style={styles.quote}>
        <Text style={styles.motto}>
          Дасгал хөдөлгөөн нь{"\n"}эрүүл амьдралын{"\n"}
          <Text style={[styles.motto, { color: "#9800FF" }]}>үндэс</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "90%",
    height: 340,
  },
  logoImage: {
    width: 120,
    height: 40,
    marginBottom: 10,
  },
  userInfo: {
    width: "100%",
    height: 200,
    backgroundColor: "rgba(58, 58, 58, 0.5)",
    borderRadius: 20,
    marginTop: 0,
  },
  general_info: {
    padding: 10,
    flexDirection: "row",
  },
  profile_pic: {
    alignItems: "center",
    width: "30%",
    alignContent: "center",
  },
  icon_base: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    verticalAlign: "center",
    backgroundColor: "#3A3A3A",
    justifyContent: "center",
  },
  icon: {
    width: "50%",
    height: "50%",
    color: "white",
  },
  proimage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#9800FF",
  },
  name: {
    width: "70%",
    marginVertical: 10,
  },
  quote: {
    marginTop: 10,
    width: "100%",
    height: 130,
    borderRadius: 20,
    backgroundColor: "rgba(58, 58, 58, 0.5)",
  },
  greeting: {
    fontSize: 16,
    color: "#fff",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  userDetails: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  userDetail1: {
    fontSize: 17,
    marginVertical: 3,
    color: "#9800FF",
  },
  userDetailContainer: {
    alignItems: "center",
    width: "30%",
  },
  userDetail: {
    fontSize: 16,
    marginVertical: 2,
    color: "#fff",
  },
  motto: {
    fontSize: 20,
    color: "#fff",
    margin: 15,
    paddingLeft: "3%",
    textAlign: "left",
  },
});

export default UserInfo;
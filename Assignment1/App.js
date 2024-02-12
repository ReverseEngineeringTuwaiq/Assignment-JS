import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// Test
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <Text style={styles.icon}>{"<"}</Text>
        <Text style={styles.icon}>✖️</Text>
      </View>

      <View style={styles.profileInfo}>
        <Image source={require('./random.jpg')} style={styles.profileImage} />
        <Text style={styles.name}>Abdulrahim Alshammari</Text>
        <Text style={styles.email}>xabd.sss@gmail.com</Text>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text>😊</Text>
          <Text>Oily Skin</Text>
        </View>
        <View style={styles.box}>
          <Text>❤️</Text>
          <Text>Favorite</Text>
        </View>
        <View style={styles.box}>
          <Text>📍</Text>
          <Text>Track</Text>
        </View>
      </View>

      <View style={styles.divider}/>

      <View style={styles.centerContent}>
        <View style={styles.centerItem}>
          <View style={styles.circle}>
            <Text>😊</Text>
          </View>
          <View>
            <Text style={styles.bold}>Username</Text>
            <Text style={styles.grey}>@test123</Text>
          </View>
          <Text style={styles.bold}>{">"}</Text>
        </View>
        <View style={styles.centerItem}>
          <View style={styles.circle}>
            <Text>🔔</Text>
          </View>
          <View>
            <Text style={styles.bold}>Notifications</Text>
            <Text style={styles.grey}>Mute, Push, Email</Text>
          </View>
          <Text style={styles.bold}>{">"}</Text>
        </View>
        <View style={styles.centerItem}>
          <View style={styles.circle}>
            <Text>⚙️</Text>
          </View>
          <View>
            <Text style={styles.bold}>Settings</Text>
            <Text style={styles.grey}>Security, Privacy</Text>
          </View>
          <Text style={styles.bold}>{">"}</Text>
        </View>
      </View>

      <View style={styles.bottomTabBar}>
        <View style={styles.tabItem}>
          <Text style={styles.grey}>🏠</Text>        
          <Text style={styles.grey}>Home</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.grey}>🛒</Text>
          <Text style={styles.grey}>Shop</Text>
        </View>
        <View style={styles.tabItem}>
          <Text style={styles.grey}>💬</Text>
          <Text style={styles.grey}>Chat</Text>
        </View>
        <View style={styles.tabItem}>
          <Text>👤</Text>
          <Text style={styles.bold}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  icon: {
    fontSize: 24,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    color: 'grey',
    marginTop: 5,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  box: {
    width: 110,
    height: 70,
    borderRadius: 16,
    backgroundColor: '#d2f7ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 20,
  },
   centerContent: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  centerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 24,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#d2f7ed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grey: {
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold'
  },
  bottomTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f7f7',
    paddingVertical: 20,
    paddingTop: 20,
    position: 'absolute',
    bottom: 4,
    width: '100%',
  },
  tabItem: {
    alignItems: 'center',
  },
});

export default ProfileScreen;

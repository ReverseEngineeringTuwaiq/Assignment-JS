import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView , SafeAreaView, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import pic from './G8.png'

const ProfileScreen = () => {
  return (
  <SafeAreaView style = {styles.safeArea}>
  <StatusBar barStyle="dark-content"/>
  <View style={styles.topBar}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Ionicons name="enter-outline" size={24} color="black" />
        </View>
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={pic} // Replace with your image path
            style={styles.profileImage}
          />
          <Text style={styles.nameText}>AbuSary</Text>
          <Text style={styles.emailText}>10M@10M.com</Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="happy-outline" size={24} color="black" />
            <Text style={styles.optionText}>Oily Skin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="heart-outline" size={24} color="black" />
            <Text style={styles.optionText}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="location-outline" size={24} color="black" />
            <Text style={styles.optionText}>Track</Text>
          </TouchableOpacity>
        </View>
        <OptionItem icon="person-outline" title="Username" details="@10M" />
        <OptionItem icon="notifications-outline" title="Notifications" details="Mute, Push, Email" />
        <OptionItem icon="settings-outline" title="Settings" details="Security, Privacy" />
      </View>
      </ScrollView>
      
      <View style={styles.navBar}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="cart-outline" size={24} color="black" />
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

const OptionItem = ({ icon, title, details }) => {
  return (
    <View style={styles.optionItemContainer}>
            <View style={styles.iconBackground}>
        <Ionicons name={icon} size={24} color="black" />
      </View>
      <View style={styles.optionItemTextContainer}>
        <Text style={styles.optionItemTitle}>{title}</Text>
        <Text style={styles.optionItemDetails}>{details}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 60,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom:2
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    color: 'gray',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: 'lightgreen',
    height:70,
    width:100,
    justifyContent: 'center', 
    alignItems: 'center',     
    padding: 10,
    borderRadius: 20,
  },
  optionText: {
    color: 'black',
    marginTop: 4,
  },
  optionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionItemTextContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  optionItemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  optionItemDetails: {
    fontSize: 14,
    color: 'grey',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,            
    left: 0,             
    right: 0,            
    backgroundColor: 'white', 
    paddingVertical: 30, 
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'white', 
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10, 
  },
  optionItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: 'white', 
    marginVertical: 10, 
  },
  iconBackground: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    opacity:0.5
  },
  // Add more styles as needed
});



export default ProfileScreen;

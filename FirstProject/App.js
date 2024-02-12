import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => <View><Text>Home Screen</Text></View>;
const ShopScreen = () => <View><Text>Shop Screen</Text></View>;
const ChatScreen = () => <View><Text>Chat Screen</Text></View>;

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Shop') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'message-square' : 'message-square';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.navleft}>
              <Icon name="arrow-left" size={20} color="#000"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navright}>
              <Icon name="log-in" size={20} color="#000"/>
        </TouchableOpacity>
        <Image source={{ uri: 'https://avatars.akamai.steamstatic.com/b4097fa3511e3c69c7de1d58f84279013bcc9578_full.jpg' }} style={styles.profileImage} />
        <Text style={styles.name}>Marcello</Text>
        <Text style={styles.email}>mama.mia@example.com</Text>
        <View style={styles.badges}>
          <TouchableOpacity style={styles.badge}>
            <Icon name="frown" size={20} color="#000" />
            <Text style={styles.badgeText}>Oily Skin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.badge}>
            <Icon name="heart" size={20} color="#000" />
            <Text style={styles.badgeText}>Favorite</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.badge}>
            <Icon name="map-pin" size={20} color="#000" />
            <Text style={styles.badgeText}>Track</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem}>
          <View style = {styles.circle}>
            <Icon name="user" size={24} color="#000" />
          </View>
          <View>
            <Text style={styles.menuItemText}>Username</Text>
            <Text style={styles.menuItemDesc}>@Marcello</Text>
          </View>
          <View style = {styles.menuNav}>
            <Icon name="chevron-right" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style = {styles.circle}>
            <Icon name="bell" size={24} color="#000" />
          </View>
          <View>
            <Text style={styles.menuItemText}>Notifications</Text>
            <Text style={styles.menuItemDesc}>Mute, Push, Email</Text>
          </View>
          <View style = {styles.menuNav}>
            <Icon name="chevron-right" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <View style = {styles.circle}>
            <Icon name="settings" size={24} color="#000" />
          </View>
          <View>
            <Text style={styles.menuItemText}>Settings</Text>
            <Text style={styles.menuItemDesc}>Security, Privacy</Text>
          </View>
          <View style = {styles.menuNav}>
            <Icon name="chevron-right" size={20} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#fff',
  },
  navleft: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  navright: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
  badges: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  badge: {
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#85eda1',
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    height: 69,
  },
  badgeText: {
    marginLeft: 5,
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '100%',
  },
  menu: {
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 14,
    marginLeft: 20,
  },
  menuItemDesc: {
    fontSize: 10,
    marginLeft: 20,
    color: 'gray',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80/2,
    backgroundColor: '#d4fadd',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  menuNav: {
    position: 'absolute',
    right: 40,
  },
});
